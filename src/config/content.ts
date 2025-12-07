/**
 * LP文言設定
 * コンテンツの一元管理
 */
export const CONTENT = {
  // 緊急ヘッダー
  emergencyHeader: {
    prefix: "緊急：",
    message: "この資料は有料級のため、予告なく公開を終了する場合があります",
  },

  // ヒーローセクション（1つのPDFのみ配布）
  hero: {
    badge: "協会会員の方には既にお渡ししています。",
    subtitle: "📘 期間限定で特別公開",
    title: {
      line1: "1億円店舗",
      highlight: "・",
      line2: "多店舗展開",
      line3: "訪問看護ロードマップ",
    },
    description: "一度立ち止まって整理しませんか？",
    cta: {
      button: "今すぐPDFを受け取る",
      microcopy: "※リンク切れの場合は配布終了です。お急ぎください。",
    },
    reasonWhy: {
      title: "なぜ公開停止の可能性があるのか？",
      content:
        "本資料は通常、月額1万円の会員コミュニティ限定で管理しています。今回は特別に期間限定で公開していますが、既存会員様への公平性を保つため、予告なく削除する場合があります。",
    },
  },

  // ブリッジセクション（Gap Logic）
  bridge: {
    confirmation: {
      title: "PDFは保存できましたか？",
    },
    warning: {
      title: "ただ、正直にお伝えすると...",
      map: {
        title: "今お渡ししたのは「一般的な地図」",
        description:
          "全国平均のセオリーを俯瞰できますが、あなたのエリア特有の競合・採用・資金・組織状況までは反映されていません。",
      },
      compass: {
        title: "本当に必要なのは「あなた専用のコンパス」",
        description:
          "地図だけでは、どこにリソースを投下すべきか判断できません。",
        risk: "投資判断が曖昧なまま進むと、採用と資金繰りの両方でブレーキがかかります。",
      },
    },
  },

  // オファーセクション（個別相談 + 残り2PDF + α を特典）
  offer: {
    badge: "ここからが本題です",
    title: {
      line1: "じょんとの",
      highlight: "無料",
      line2: "個別作戦会議",
    },
    subtitle: "オンライン / 30分 / 完全無料",
    benefits: [
      "あなたの開業エリアの競合分析をその場で実施",
      "資金・経験・状況に合わせた現実的なプランを提案",
      "今すぐやるべき「次の一手」が明確になる",
    ],
    scarcity: {
      limit: 5,
      unit: "名",
      period: "月間",
      reason: "私も現場に出ているため、これが限界です",
    },
    // 相談者限定の特典（4つのPDF）
    bonuses: [
      {
        id: "seminar",
        title: "お仕事説明会資料の重要性",
        description: "採用成功の鍵を握る説明会資料の作り方と活用法。",
        url: "https://drive.google.com/file/d/1DmJknRxQNPhTkA9xu4KyOBqMs_BPePU4/view?usp=sharing",
      },
      {
        id: "sales",
        title: "営業トークスクリプト",
        description: "ケアマネ・医療機関への営業で成果が出ているトーク集。",
        url: "https://drive.google.com/file/d/1qtKlw-XzJYTcKYOP6aYeLoYcE8msgeG7/view?usp=sharing",
      },
      {
        id: "cost",
        title: "新人入職コストについて",
        description: "採用〜戦力化までのコストを可視化した分析資料。",
        url: "https://drive.google.com/file/d/1t6qVcVLF6SAY9Aueuc2DLwSHVzst3q9k/view?usp=sharing",
      },
      {
        id: "hr",
        title: "人事考課の考え方について",
        description: "スタッフの評価制度と運用のポイントをまとめた資料。",
        url: "https://drive.google.com/file/d/12bf9Fn2g0toLwroanrsOcExHKwbS_2wb/view?usp=sharing",
      },
    ],
    bonusNote: "※ 上記4点は相談を受けた方だけにお渡ししています",
    whyFree: {
      title: "なぜ、こんな事を無料でするのか？",
      content:
        "開業する、運営している人が一人でも経営・運営が良くなることで結果、利用者、社員、日本国民の医療の質、社会保障費の無駄遣いが減ると本気で思っているから。",
    },
    cta: {
      primary: "無料で作戦会議を予約する",
      footer: "無料で作戦会議を予約する 📅",
      microcopy: "※ 強引な勧誘は一切ありません。お気軽にどうぞ。",
    },
  },

  // FAQ
  faq: {
    title: "よくあるご質問",
    items: [
      {
        question: "本当に無料ですか？",
        answer:
          "はい、30分の個別相談は完全無料です。お話の中で当社サービスが合いそうな場合のみご案内しますが、無理な勧誘は一切ございません。",
      },
      {
        question: "開業前でも相談できますか？",
        answer:
          "もちろんです。むしろ開業前の方こそ、正しい方向性を知っておくことで失敗を防げます。「まだ何も決まっていない」状態でも大歓迎です。",
      },
      {
        question: "PDFはいつまでダウンロードできますか？",
        answer:
          "期限は設けていませんが、既存の有料会員様への配慮から、予告なく公開停止する可能性があります。ダウンロードできるうちに保存しておくことをお勧めします。",
      },
    ],
  },

  // フッター
  footer: {
    copyright: "© 2025 じょん. All rights reserved.",
  },
} as const;
