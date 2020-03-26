chrome.browserAction.onClicked.addListener(function (tab) {
    const workbuddyArr = ["https://www.google.com/search?sxsrf=ALeKk03B7Oyj6tU_E1nZwUtVwOS4XzmeOw%3A1585190930740&source=hp&ei=Ehh8XvuJKsKX-gTry7p4&q=how+to+be+more+productive&oq=how+to+be+more+productive&gs_l=psy-ab.3..0i20i263j0j0i20i263j0l7.2058.4880..7424...1.0..1.355.4651.8j4j8j4......0....1..gws-wiz.......35i39j0i273j0i131j0i67.hf0b672fFKI&ved=0ahUKEwj72syykLfoAhXCi54KHeulDg8Q4dUDCAg&uact=5",
        "https://www.google.com/search?sxsrf=ALeKk03Oam0h-dNkElJmI7cGh_a4cZvtgQ%3A1585190938626&ei=Ghh8XvfZJZHt-gTIypXQAw&q=how+to+be+a+better+employee&oq=how+to+be+a+better+employee&gs_l=psy-ab.3..0l6j0i22i30l4.131901.138738..138863...1.4..0.141.2561.23j5......0....1..gws-wiz.......0i71j35i39j0i67j0i131j0i13j0i13i30j0i8i13i30.joMS0Gv2Zdw&ved=0ahUKEwj3zrC2kLfoAhWRtp4KHUhlBToQ4dUDCAs&uact=5",
        "https://www.google.com/search?sxsrf=ALeKk03RAE1K2PJR3q3_i4Ajuz8wpPdV3Q%3A1585191088976&ei=sBh8XtKdO9fj-gSgwpZI&q=how+to+work+more+effciently+&oq=how+to+work+more+effciently+&gs_l=psy-ab.3..0i13l5j0i13i30j0i22i30l4.36258.42489..42741...0.4..0.116.2536.22j6......0....1..gws-wiz.......0i71j35i39j0i67j0j0i131j0i273j0i20i263j0i13i10i30j0i8i13i30.i2ATmKUJ9dc&ved=0ahUKEwjStYn-kLfoAhXXsZ4KHSChBQkQ4dUDCAs&uact=5",
        "https://www.google.com/search?sxsrf=ALeKk03ZrnbdwmrR53NjDSMFpqAwJawR2g%3A1585191207608&ei=Jxl8XvrQJM6e-gTW3IKoAQ&q=how+to+be+more+organized+at+work&oq=how+to+be+more+organized+at+work&gs_l=psy-ab.12..0j0i7i30l2j0l3j0i30j0i5i30j0i8i30.1724.1724..4265...0.2..0.106.106.0j1......0....1..gws-wiz.......0i71.QtmATufcVFY&ved=0ahUKEwi6gNK2kbfoAhVOj54KHVauABUQ4dUDCAs",
        "https://www.google.com/search?sxsrf=ALeKk03pdLe03bSTRRLXMGp21OGzY2DVAA%3A1585191212818&ei=LBl8XvLAMc37-gTpvIzIDQ&q=+how+to+be+a+better+leader+in+the+workplace&oq=+how+to+be+a+better+leader+in+the+workplace&gs_l=psy-ab.12..0j0i22i30.37568.37568..38281...0.9..0.111.111.0j1......0....2j1..gws-wiz.......0i71.61VwrQ5Mr6w&ved=0ahUKEwjyhpC5kbfoAhXNvZ4KHWkeA9kQ4dUDCAs"]
    const productiveWindow = (arr) => {
        return arr[Math.floor(Math.random() * (workbuddyArr.length))]
    }

    chrome.windows.create({
        url: (productiveWindow(workbuddyArr)),
        type: "popup"
    });
});

// const googleUrl = "https://www.google.com/search?sxsrf=ALeKk03B7Oyj6tU_E1nZwUtVwOS4XzmeOw:1585190930740&source=hp&ei=Ehh8XvuJKsKX-gTry7p4&q=how+to+be+more+productive&oq=how+to+be+more+productive&gs_l=psy-ab.3..0i20i263j0j0i20i263j0l7.2058.4880..7424...1.0..1.355.4651.8j4j8j4......0....1..gws-wiz.......35i39j0i273j0i131j0i67.hf0b672fFKI&ved=0ahUKEwj72syykLfoAhXCi54KHeulDg8Q4dUDCAg&uact=5"
// 1. how to be more productive
// https://www.google.com/search?sxsrf=ALeKk03B7Oyj6tU_E1nZwUtVwOS4XzmeOw%3A1585190930740&source=hp&ei=Ehh8XvuJKsKX-gTry7p4&q=how+to+be+more+productive&oq=how+to+be+more+productive&gs_l=psy-ab.3..0i20i263j0j0i20i263j0l7.2058.4880..7424...1.0..1.355.4651.8j4j8j4......0....1..gws-wiz.......35i39j0i273j0i131j0i67.hf0b672fFKI&ved=0ahUKEwj72syykLfoAhXCi54KHeulDg8Q4dUDCAg&uact=5

// 2. how to be a better employee
// https://www.google.com/search?sxsrf=ALeKk03Oam0h-dNkElJmI7cGh_a4cZvtgQ%3A1585190938626&ei=Ghh8XvfZJZHt-gTIypXQAw&q=how+to+be+a+better+employee&oq=how+to+be+a+better+employee&gs_l=psy-ab.3..0l6j0i22i30l4.131901.138738..138863...1.4..0.141.2561.23j5......0....1..gws-wiz.......0i71j35i39j0i67j0i131j0i13j0i13i30j0i8i13i30.joMS0Gv2Zdw&ved=0ahUKEwj3zrC2kLfoAhWRtp4KHUhlBToQ4dUDCAs&uact=5

// 3. how to work more efficiently
// https://www.google.com/search?sxsrf=ALeKk03RAE1K2PJR3q3_i4Ajuz8wpPdV3Q%3A1585191088976&ei=sBh8XtKdO9fj-gSgwpZI&q=how+to+work+more+effciently+&oq=how+to+work+more+effciently+&gs_l=psy-ab.3..0i13l5j0i13i30j0i22i30l4.36258.42489..42741...0.4..0.116.2536.22j6......0....1..gws-wiz.......0i71j35i39j0i67j0j0i131j0i273j0i20i263j0i13i10i30j0i8i13i30.i2ATmKUJ9dc&ved=0ahUKEwjStYn-kLfoAhXXsZ4KHSChBQkQ4dUDCAs&uact=5

// 4. how to be more organized at work
// https://www.google.com/search?sxsrf=ALeKk03ZrnbdwmrR53NjDSMFpqAwJawR2g%3A1585191207608&ei=Jxl8XvrQJM6e-gTW3IKoAQ&q=how+to+be+more+organized+at+work&oq=how+to+be+more+organized+at+work&gs_l=psy-ab.12..0j0i7i30l2j0l3j0i30j0i5i30j0i8i30.1724.1724..4265...0.2..0.106.106.0j1......0....1..gws-wiz.......0i71.QtmATufcVFY&ved=0ahUKEwi6gNK2kbfoAhVOj54KHVauABUQ4dUDCAs

// 5. how to be a better leader in the workplace
// https://www.google.com/search?sxsrf=ALeKk03pdLe03bSTRRLXMGp21OGzY2DVAA%3A1585191212818&ei=LBl8XvLAMc37-gTpvIzIDQ&q=+how+to+be+a+better+leader+in+the+workplace&oq=+how+to+be+a+better+leader+in+the+workplace&gs_l=psy-ab.12..0j0i22i30.37568.37568..38281...0.9..0.111.111.0j1......0....2j1..gws-wiz.......0i71.61VwrQ5Mr6w&ved=0ahUKEwjyhpC5kbfoAhXNvZ4KHWkeA9kQ4dUDCAs
