from modules.watchman import Watchman


def main():
    watchman = Watchman()
    # watchman.test_all()
    watchman.close_browser()


if __name__ == "__main__":
    main()
