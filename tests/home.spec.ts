import { test, expect } from "@playwright/test";

test.describe("Strona główna — Portfolio", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("powinna wyświetlić tytuł z frazą 'strony internetowe'", async ({ page }) => {
    await expect(page).toHaveTitle(/strony internetowe/i);
  });

  test("powinna mieć nagłówek H1 z 'strony internetowe'", async ({ page }) => {
    const h1 = page.locator("h1");
    await expect(h1).toBeVisible();
    await expect(h1).toContainText(/strony internetowe/i);
  });

  test("powinna mieć sekcję 'O mnie'", async ({ page }) => {
    const aboutSection = page.locator("#about");
    await expect(aboutSection).toBeVisible();
    await expect(aboutSection).toContainText("Patryk");
  });

  test("powinna mieć sekcję projektów", async ({ page }) => {
    const projectsSection = page.locator("#projekty");
    await expect(projectsSection).toBeVisible();
    await expect(projectsSection).toContainText("CalmJourneyer");
    await expect(projectsSection).toContainText("Searon");
  });

  test("powinna mieć sekcję kontakt", async ({ page }) => {
    const contactSection = page.locator("#kontakt");
    await expect(contactSection).toBeVisible();
    await expect(contactSection).toContainText("Zacznijmy rozmowę");
  });

  test("powinna mieć link do maila", async ({ page }) => {
    const mailLink = page.locator('a[href^="mailto:"]');
    await expect(mailLink.first()).toBeVisible();
  });
});

test.describe("Podstrony projektów", () => {
  test("CalmJourneyer — powinna wyświetlić tytuł projektu", async ({ page }) => {
    await page.goto("/projekty/calmjourneyer");
    await expect(page.locator("h1")).toContainText("CalmJourneyer");
    await expect(page).toHaveTitle(/CalmJourneyer/i);
  });

  test("Searon — powinna wyświetlić tytuł projektu", async ({ page }) => {
    await page.goto("/projekty/searon");
    await expect(page.locator("h1")).toContainText("Searon");
    await expect(page).toHaveTitle(/Searon/i);
  });

  test("powinna mieć przycisk 'Powrót do portfolio'", async ({ page }) => {
    await page.goto("/projekty/calmjourneyer");
    const backLink = page.locator('a[href="/"]');
    await expect(backLink).toBeVisible();
  });
});

test.describe("404", () => {
  test("powinna wyświetlić stronę 404", async ({ page }) => {
    await page.goto("/nieistniejaca-strona");
    await expect(page.locator("h1")).toContainText("404");
  });
});

test.describe("Kontakt", () => {
  test("powinna mieć numer telefonu", async ({ page }) => {
    await page.goto("/");
    const telLink = page.locator('a[href^="tel:"]');
    await expect(telLink.first()).toBeVisible();
  });

  test("formularz powinien wysłać wiadomość", async ({ page }) => {
    await page.goto("/");
    await page.fill('input[name="name"]', "Test");
    await page.fill('input[name="email"]', "test@example.com");
    await page.fill('textarea[name="message"]', "Wiadomość testowa");
    await page.click('button[type="submit"]');
    await expect(page.locator("text=Wiadomość wysłana")).toBeVisible({ timeout: 5000 });
  });
});

test.describe("SEO", () => {
  test("sitemap.xml powinien być dostępny", async ({ page }) => {
    const response = await page.goto("/sitemap.xml");
    expect(response?.ok()).toBeTruthy();
  });

  test("robots.txt powinien być dostępny", async ({ page }) => {
    const response = await page.goto("/robots.txt");
    expect(response?.ok()).toBeTruthy();
  });
});
