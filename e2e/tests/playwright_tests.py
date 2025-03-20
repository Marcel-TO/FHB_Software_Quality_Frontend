import re
from playwright.sync_api import Page, expect


def test_has_title(page: Page):
    """Test that the page has a title."""
    page.goto("http://localhost:5173/")

    # Expect a title "to contain" a substring.
    expect(page).to_have_title(re.compile("SQ Frontend"))


def test_has_form_page(page: Page):
    """Test that the page has a form."""
    page.goto("http://localhost:5173/")

    # Click the get started link.
    page.get_by_role("link", name="Get moving").click()

    # check if route has changed
    expect(page).to_have_url(re.compile(".*/form/?$"))

    # Expects page to have a heading with the name of Moving Data.
    expect(page.get_by_test_id("moving-form-heading")).to_be_visible()
    expect(page.get_by_test_id("moving-form-heading")).to_have_text(
        re.compile("Let's get Moving")
    )


def test_fill_form(page: Page):
    """Test filling out the form."""
    page.goto("http://localhost:5173/form")

    # Fill out the form
    page.get_by_label("Name").fill("Test User")
    page.get_by_label("Email").fill("test@example.com")
    page.get_by_label("Date").fill("2024-01-01")
    page.get_by_label("From Address").fill("123 Test Street")
    page.get_by_label("To Address").fill("456 Example Road")

    # Submit the form
    page.get_by_role("button", name="Submit").click()

    # Verify form submission
    expect(page.get_by_text("Form submitted successfully")).to_be_visible()
