import { AfterViewInit, Component } from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    document.addEventListener("DOMContentLoaded", () => {
      const html = document.documentElement;
      const storedTheme = localStorage.getItem("hs_theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      function getCurrentTheme(): "light" | "dark" {
        if (storedTheme) return storedTheme as "light" | "dark";
        return prefersDark ? "dark" : "light";
      }

      function setTheme(theme: "light" | "dark") {
        localStorage.setItem("hs_theme", theme);
        html.classList.toggle("dark", theme === "dark");
        html.classList.toggle("light", theme === "light");
      }

      // Apply stored or system theme on page load
      setTheme(getCurrentTheme());

      // Toggle theme on button click
      document.querySelectorAll<HTMLButtonElement>("[data-hs-theme-toggle]").forEach((button) => {
        button.addEventListener("click", () => {
          const newTheme = html.classList.contains("dark") ? "light" : "dark";
          setTheme(newTheme);
        });
      });
    });
  }

}
