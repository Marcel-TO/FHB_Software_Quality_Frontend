import re
from playwright.sync_api import sync_playwright
import tests.playwright_tests as playwright_tests


class Watchman:
    def __init__(self):
        self.playwright = sync_playwright().start()
        self.browser = self.playwright.chromium.launch()
        self.page = self.browser.new_page()
        self.page.goto("http://localhost:5173/")

    def close_browser(self):
        self.browser.close()
        self.playwright.stop()

    def test_all(self):
        playwright_tests.test_has_title(self.page)
        # pytest.test_has_form_page(self.page)
