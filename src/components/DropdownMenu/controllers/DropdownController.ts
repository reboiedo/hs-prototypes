import type { Category, DropdownState } from "../types/dropdown";

export class DropdownController {
  private container: HTMLElement;
  private state: DropdownState = {
    isActive: false,
    currentRect: null,
    animationFrame: null,
  };

  constructor(container: HTMLElement) {
    this.container = container;
  }

  private getHeaderOffset(): number {
    const header = document.querySelector(".header") as HTMLElement;
    if (!header) return 0;
    const transform = window.getComputedStyle(header).transform;
    if (transform === "none") return 0;
    const matrix = new DOMMatrix(transform);
    return matrix.m42; // Get Y transform value
  }

  showDropdown(
    category: Category,
    rect: DOMRect,
    focus: boolean = false
  ): void {
    const prevActive = document.querySelector('button[aria-expanded="true"]');

    // Cancel any pending animation frame
    if (this.state.animationFrame) {
      cancelAnimationFrame(this.state.animationFrame);
    }

    const headerOffset = this.getHeaderOffset();

    // Always animate if dropdown is already active
    if (this.state.isActive) {
      this.container.classList.add("animating");
      this.state.animationFrame = requestAnimationFrame(() => {
        this.state.animationFrame = requestAnimationFrame(() => {
          this.container.style.transform = `translate(${rect.left}px, ${
            rect.bottom - headerOffset
          }px)`;
          this.state.currentRect = rect;
        });
      });
    } else {
      // Initial opening - no animation
      this.container.style.transform = `translate(${rect.left}px, ${
        rect.bottom - headerOffset
      }px)`;
      this.container.classList.add("active");
      this.state.currentRect = rect;
    }

    // Store the current position
    this.state.currentRect = rect;

    // Toggle content and states
    const contents =
      document.querySelectorAll<HTMLDivElement>(".dropdown-content");
    contents.forEach((content) => {
      content.classList.toggle("active", content.dataset.content === category);
    });

    document.querySelectorAll('button[role="menuitem"]').forEach((button) => {
      const isCurrentCategory =
        button.closest("li")?.dataset.category === category;
      button.classList.toggle("active", isCurrentCategory);
      button.setAttribute(
        "aria-expanded",
        isCurrentCategory ? "true" : "false"
      );
    });

    if (!this.state.isActive) {
      // Ensure container is visible on first open
      requestAnimationFrame(() => {
        this.container.classList.add("active");
      });
    }

    this.state.isActive = true;
  }

  hideDropdown(): void {
    if (!this.state.isActive) return;

    if (this.state.animationFrame) {
      cancelAnimationFrame(this.state.animationFrame);
      this.state.animationFrame = null;
    }
    this.state.currentRect = null;

    this.container.classList.remove("active");
    const buttons =
      document.querySelectorAll<HTMLButtonElement>("button.dropdown");
    buttons.forEach((button) => {
      button.classList.remove("active");
    });

    document.querySelectorAll('button[role="menuitem"]').forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-expanded", "false");
    });

    document.querySelectorAll(".dropdown-content").forEach((content) => {
      content.setAttribute("tabindex", "-1");
    });

    // Remove animation class after hiding
    this.container.classList.remove("animating");

    this.state.isActive = false;
  }

  private handleKeyPress = (e: KeyboardEvent, button: HTMLElement): void => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      const listItem = button.closest("li") as HTMLElement;
      if (!listItem) return;

      const category = listItem.dataset.category as Category;
      const rect = listItem.getBoundingClientRect();

      if (
        this.state.isActive &&
        button.getAttribute("aria-expanded") === "true"
      ) {
        this.hideDropdown();
      } else {
        this.showDropdown(category, rect, true);
      }
    }
  };

  setupEventListeners(navList: HTMLElement): void {
    // Add hover listeners to navigation items
    navList.querySelectorAll<HTMLLIElement>("li").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        const category = item.dataset.category as Category;
        const rect = item.getBoundingClientRect();
        this.showDropdown(category, rect);
      });
    });

    // Hide dropdown when mouse leaves navigation
    navList.addEventListener("mouseleave", (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (!this.container.contains(relatedTarget)) {
        this.hideDropdown();
      }
    });

    // Hide dropdown when mouse leaves dropdown container
    this.container.addEventListener("mouseleave", (e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement;
      const targetCategory = relatedTarget?.closest("li")?.dataset.category;

      if (!targetCategory) {
        this.hideDropdown();
      }
    });

    // Update keyboard event listeners
    navList
      .querySelectorAll<HTMLElement>('button[role="menuitem"]')
      .forEach((button) => {
        button.addEventListener("keydown", (e) =>
          this.handleKeyPress(e, button)
        );
      });

    // Handle focus trap in dropdown content
    this.container.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        this.hideDropdown();
        const activeButton = document.querySelector(
          'button[aria-expanded="true"]'
        ) as HTMLElement;
        if (activeButton) activeButton.focus();
      }
    });

    // Handle transition end to clean up animation class
    this.container.addEventListener("transitionend", (e: TransitionEvent) => {
      if (e.propertyName === "transform") {
        this.container.classList.remove("animating");
      }
    });
  }
}
