

// omikuji-contents
class Omikuji {

    constructor() {
        this.fortune = this.getFortune();
        this.fortuneImagePath = this.getFortuneImagePath(this.fortune);
        this.fortuneMessage = this.getFortuneMessage(this.fortune);
        this.loveFortuneMessage = this.getLoveFortuneMessage(this.fortune);
        this.financialFortuneMessage = this.getFinancialFortuneMessage(this.fortune);
        this.luckyItem = this.getLuckyItem();
        this.luckyLang = this.getLuckyLang();
    }

    static fortunes = Object.freeze({
        "超大吉": 1,
        "大吉": 10,
        "吉": 24,
        "中吉": 20,
        "小吉": 15,
        "末吉": 15,
        "凶": 10,
        "大凶": 5,
    });

    static fortuneImagePaths = Object.freeze({
        "超大吉": "imgs/fortune/shichifukujin_takarabune.png",
        "大吉": "imgs/fortune/omikuji_daikichi.png",
        "吉": "imgs/fortune/omikuji_kichi.png",
        "中吉": "imgs/fortune/omikuji_chuukichi.png",
        "小吉": "imgs/fortune/omikuji_syoukichi.png",
        "末吉": "imgs/fortune/omikuji_suekichi.png",
        "凶": "imgs/fortune/omikuji_kyou.png",
        "大凶": "imgs/fortune/omikuji_daikyou.png",
    });

    static fortuneMessages = Object.freeze({
        choudaikichi: "今日は最高の一日。あらゆることが上手くいくでしょう。",
        daikichiToChuukichi: [
            "思いがけない幸せが訪れる予感。笑顔を忘れずに過ごすと良いでしょう。",
            "今日の努力が大きな実りとなります。自信を持って励みましょう。",
            "良き運に恵まれます。新たな挑戦で福が来るでしょう。",
        ],
        shoukichiToSuekichi: [
            "謙虚な心を忘れずに過ごせば、運気が上がるでしょう。",
            "今は力を蓄える時。努力は必ず実を結びます。",
            "一歩一歩の積み重ねが、大きな幸運となるでしょう。",
        ],
        kyouToDaikyou: [
            "困難の先に福があります。今は耐え忍ぶべきです。",
            "口は災いの元。言葉を慎めば福を呼べるでしょう。",
            "思うように進まぬ日ですが、誠を尽くせば道は開けるでしょう。",
        ],
    });

    static loveFortuneMessages = Object.freeze({
        choudaikichi: "最高潮。良い巡り合わせがありとても幸せな1日となるでしょう。",
        daikichiToChuukichi: [
            "好きな人との距離がぐっと縮まる予感。勇気を出して声をかけてみましょう。",
            "運命の出会いや急接近の好機が来るでしょう。自然体でいるのが良いでしょう。",
            "良縁に恵まれる兆しがあります。素直な心で接すれば、想いは実を結ぶでしょう。",
        ],
        shoukichiToSuekichi: [
            "無理に進まず、時の流れに身を任せるが吉となるでしょう。",
            "今は縁を育む時です。急がず歩めば良い機会に恵まれるでしょう。",
            "恋路はゆるやかに開けていきます。誠実な心を忘れないように。",
        ],
        kyouToDaikyou: [
            "すれ違いの兆しがあります。相手の言葉に耳を傾けるべきです。",
            "感情に任せた振る舞いは慎むべきです。思いやりが福を呼ぶでしょう。",
            "恋路に迷いがあるでしょう。焦らず己を見つめ直す時です。", 
        ],
    });

    static financialFortuneMessages = Object.freeze({
        choudaikichi: "絶好調。欲しいものを必ず手に入れられるでしょう。",
        daikichiToChuukichi: [
            "欲しかったものをお得に手に入れられるかもしれません。買い物運も良いでしょう。",
            "臨時収入やうれしいプレゼントが舞い込むかもしれません。感謝の気持ちを大切にしましょう。",
            "買い物運が来ています。必要なものを選べば満足のいく結果となるでしょう。",
        ],
        shoukichiToSuekichi: [
            "蓄えを増やす好機です。堅実な行いが吉となるでしょう。",
            "無駄を慎むことで、財が自然と集まって来るでしょう。",
            "金運は穏やかです。倹約を心掛ければ福が来るでしょう。",
        ],
        kyouToDaikyou: [
            "貸し借りは慎重に。思わぬ苦労を招く恐れがあります。",
            "衝動買いは後悔のもと。よく考えてから決断すると良いでしょう。",
            "思わぬ出費の兆しがあります。財布の紐を締めるべきでしょう。",
        ],
    });

    static luckyItems = Object.freeze(["ハンカチ", "ボールペン", "ノート", "本", "イヤホン", "腕時計", "水筒", "折り畳み傘", "帽子", "サングラス"]);

    static luckyLangs = Object.freeze(["JavaScript", "Python", "Java", "C", "C++", "Go", "Kotlin", "Ruby", "Rust", "Dart", "PHP"]);

    getFortuneImagePath(fortune) {
        return Omikuji.fortuneImagePaths[fortune];
    }

    static drawFortune(random = Math.random) {
        const fortunes = Object.entries(Omikuji.fortunes);
        const totalWeight = fortunes.reduce((total, [, weight]) => total + weight, 0);

        if (totalWeight <= 0) {
            throw new Error("運勢の重みは合計が1以上になるように設定してください。");
        }

        let winningNumber = random() * totalWeight;

        for (const [name, weight] of fortunes) {
            winningNumber -= weight;
            if (winningNumber < 0) {
                return name;
            }
        }

        return fortunes[fortunes.length - 1][0];
    }

    getFortune() {
        return Omikuji.drawFortune();
    }
    
    getFortuneMessage(fortune) {
        return this.getMessage(fortune, Omikuji.fortuneMessages);
    }

    getLoveFortuneMessage(fortune) {
        return this.getMessage(fortune, Omikuji.loveFortuneMessages);
    }

    getFinancialFortuneMessage(fortune) {
        return this.getMessage(fortune, Omikuji.financialFortuneMessages);
    }

    getMessage(fortune, messages) {
        switch(fortune) {
            case "超大吉":
                return messages.choudaikichi;

            case "大吉":
            case "吉":
            case "中吉":
                return this.getRandomElement(messages.daikichiToChuukichi);

            case "小吉":
            case "末吉":
                return this.getRandomElement(messages.shoukichiToSuekichi);

            case "凶":
            case "大凶":
                return this.getRandomElement(messages.kyouToDaikyou);               
        }
    }

    getLuckyItem() {
        return this.getRandomElement(Omikuji.luckyItems);
    }

    getLuckyLang() {
        return this.getRandomElement(Omikuji.luckyLangs);
    }

    getRandomElement(list) {
        return list[this.getRandomNum(list.length)];
    }

    getRandomNum(range) {
        return Math.floor(Math.random() * range);
    }
}

// DOM操作
const topContent = document.querySelector("#topContent");
const resultContent = document.querySelector("#resultContent");
const siteFooter = document.querySelector("#siteFooter");

const drawButton = document.querySelector("#drawButton");
const retryButton = document.querySelector("#retryButton");
const omikujiImage = document.querySelector(".omikuji-image");

const fortuneImage = document.querySelector("#fortuneImage");
const fortuneName = document.querySelector("#fortuneName");
const fortuneMessage = document.querySelector("#fortuneMessage");
const loveFortuneMessage = document.querySelector(
    "#loveFortuneMessage"
);
const financialFortuneMessage = document.querySelector(
    "#financialFortuneMessage"
);
const luckyItem = document.querySelector("#luckyItem");
const luckyLang = document.querySelector("#luckyLang");


function showOmikujiResult() {
    // 新しいおみくじ結果を生成する
    const omikuji = new Omikuji();

    // 生成された結果をHTMLに設定する
    fortuneImage.src = omikuji.fortuneImagePath;
    fortuneImage.alt = `${omikuji.fortune}のおみくじ画像`;

    fortuneName.textContent = omikuji.fortune;
    fortuneMessage.textContent = omikuji.fortuneMessage;
    loveFortuneMessage.textContent =
        omikuji.loveFortuneMessage;
    financialFortuneMessage.textContent =
        omikuji.financialFortuneMessage;
    luckyItem.textContent = omikuji.luckyItem;
    luckyLang.textContent = omikuji.luckyLang;

    // トップ画面を隠して結果画面を表示する
    topContent.hidden = true;
    resultContent.hidden = false;

    // 結果画面ではフッターを非表示
    siteFooter.hidden = true;
}


let isDrawing = false;

function drawOmikuji() {
    // アニメーション中の連続クリックを防ぐ
    if (isDrawing) {
        return;
    }

    isDrawing = true;
    drawButton.disabled = true;

    const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // アニメーションを減らす設定の利用者には、すぐ結果を表示する
    if (prefersReducedMotion) {
        showOmikujiResult();

        drawButton.disabled = false;
        isDrawing = false;
        return;
    }

    omikujiImage.classList.add("is-shaking");

    omikujiImage.addEventListener(
        "animationend",
        () => {
            omikujiImage.classList.remove("is-shaking");

            showOmikujiResult();

            drawButton.disabled = false;
            isDrawing = false;
        },
        { once: true }
    );
}

drawButton.addEventListener("click", drawOmikuji);

retryButton.addEventListener("click", () => {
    resultContent.hidden = true;
    topContent.hidden = false;

    // トップ画面ではフッターを再表示
    siteFooter.hidden = false;
});