from    playwright_tests import test_form_validation
from playwright.sync_api import Page, expect

def test_debug_single_test(page: Page):
    """Test filling out the form."""
    test_form_validation(page)
