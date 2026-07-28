(() => {
  const STORAGE_KEY = "koaus-language";
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();

  const ko = {
    "Skip to main content": "본문으로 바로가기",
    Shop: "쇼핑",
    "How it works": "이용 방법",
    "For Brands": "브랜드",
    Checker: "진단하기",
    About: "소개",
    "Join the Launch": "런칭 소식 받기",
    "Join the launch": "런칭 소식 받기",
    "Join the Launch List": "런칭 알림 신청",
    "Join the launch list": "런칭 알림 신청",
    "Open search": "검색 열기",
    "Search products": "상품 검색",
    "Saved picks": "저장한 상품",
    "Show saved picks": "저장한 상품만 보기",
    "View saved picks": "저장한 상품 보기",
    "Open menu": "메뉴 열기",
    "Close menu": "메뉴 닫기",
    "Open navigation menu": "내비게이션 메뉴 열기",
    "Close navigation menu": "내비게이션 메뉴 닫기",
    "Primary navigation": "주요 내비게이션",
    "Main navigation": "주요 내비게이션",
    "Mobile navigation": "모바일 내비게이션",
    "Footer navigation": "푸터 내비게이션",
    Breadcrumb: "현재 위치",
    Home: "홈",
    Category: "카테고리",
    Product: "상품",
    "Search koaus": "koaus 검색",
    "Try “desk”, “gift”, or “stationery”": "‘데스크’, ‘선물’, ‘문구’를 검색해 보세요",
    Close: "닫기",
    Save: "저장",
    Saved: "저장됨",
    Vote: "투표",
    "Voted ✓": "투표 완료 ✓",
    "Save ♡": "저장 ♡",
    "Saved ♥": "저장됨 ♥",

    "Curated in Seoul · Shared worldwide": "서울에서 고르고, 세계와 나눕니다",
    "Small Korean finds for a": "한국의 작은 발견으로",
    "better everyday.": "더 나은 일상을.",
    "Discover and vote for well-designed Korean lifestyle goods before their global launch.":
      "글로벌 출시 전, 잘 만든 한국 라이프스타일 상품을 발견하고 투표해 보세요.",
    "Enter the shop": "쇼핑 시작하기",
    "New arrivals": "새로 들어온 상품",
    "Chosen with early koaus voters": "koaus 얼리 보터와 함께 골랐어요",
    "Seoul pick": "서울 픽",
    "Shop by category": "카테고리별 쇼핑",
    Desk: "데스크",
    "Pens, notebooks, organizers and little helpers.": "펜, 노트, 정리함과 작은 데스크 도구.",
    Room: "리빙",
    "Decor, soft light, fragrance and quiet details.": "오브제, 은은한 조명과 차분한 공간의 디테일.",
    Fashion: "패션",
    "Easy bags and considered pieces for every day.": "매일 편하게 드는 가방과 세심한 패션 아이템.",
    Gift: "선물",
    "Thoughtful picks for someone special—or you.": "소중한 사람과 나를 위한 사려 깊은 선택.",
    "Why koaus exists": "koaus가 필요한 이유",
    "From hard-to-find to ready-to-launch.": "발견하기 어려운 상품을, 출시 가능한 기회로.",
    "Korean lifestyle goods have global fans, but discovery and market testing still feel fragmented. koaus turns early buyer interest into a clearer, lower-risk launch signal.":
      "한국 라이프스타일 상품을 좋아하는 글로벌 팬은 많지만, 상품 발견과 시장 검증 과정은 여전히 흩어져 있습니다. koaus는 초기 소비자 관심을 더 명확하고 위험이 낮은 출시 신호로 전환합니다.",
    "01 · Problem": "01 · 문제",
    "02 · Solution": "02 · 해결",
    "03 · Effect": "03 · 기대효과",
    "Great Korean goods stay difficult to discover.": "좋은 한국 상품이 해외 소비자에게 발견되기 어렵습니다.",
    "Global buyers miss small brands, while makers lack clear U.S. demand signals.":
      "글로벌 소비자는 작은 브랜드를 놓치고, 브랜드는 미국 수요를 확인할 근거가 부족합니다.",
    "Discover, save, and vote before launch.": "출시 전에 발견하고, 저장하고, 투표합니다.",
    "koaus curates promising goods and measures real buyer interest before inventory.":
      "koaus는 가능성 있는 상품을 큐레이션하고 재고 투자 전에 실제 소비자 관심을 측정합니다.",
    "Launch what people actually want.": "사람들이 실제로 원하는 상품을 출시합니다.",
    "Buyers get earlier access and brands test demand with less cost and risk.":
      "소비자는 더 일찍 상품을 만나고 브랜드는 더 적은 비용과 위험으로 수요를 검증합니다.",
    "See the full process": "전체 과정 보기",
    "Request a Product Check": "상품 가능성 진단 신청",
    "Shop preview": "쇼핑 미리보기",
    "A glimpse of the drop": "이번 드롭 미리보기",
    "Three community favorites. Continue to the dedicated shop for the full catalog.":
      "커뮤니티가 고른 세 가지 상품입니다. 전체 상품은 Shop에서 확인하세요.",
    "Visit the shop": "Shop 바로가기",
    "Community desk diaries": "커뮤니티의 일상 기록",
    "See it in real life.": "실제 일상에서 만나보세요.",
    "Short-form creator concepts showing how a koaus pick can fit into an everyday routine.":
      "koaus 상품이 실제 일상에 어떻게 스며드는지 보여주는 생활형 숏폼 콘텐츠입니다.",
    "Follow @koaus.shop": "@koaus.shop 팔로우",
    "Real routine": "실제 루틴",
    "Desk reset": "데스크 정리",
    Journaling: "다이어리 쓰기",
    "Home organizing": "집 정리",
    "Sound off": "음소거",
    "Sound on": "소리 켜짐",
    "Resetting the desk after work": "업무 후 책상을 정리하는 시간",
    "A quiet diary moment at home": "집에서 보내는 조용한 기록의 순간",
    "Making everyday storage feel calmer": "일상의 수납을 더 차분하게",
    "Real-life stock footage used under the Pexels license as an MVP stand-in. Replace with permission-cleared customer submissions when the creator program launches.":
      "현재 영상은 MVP 예시로 사용한 Pexels 라이선스 스톡 영상입니다. 크리에이터 프로그램 운영 시 사용 동의를 받은 고객 UGC로 교체합니다.",
    "The tidy desk edit": "정돈된 데스크 셀렉션",
    "Little things,": "작은 것들을,",
    "beautifully in place.": "아름답게 제자리에.",
    "Thoughtful pieces for a more organized, lighter, and happier way of living.":
      "더 정돈되고 가볍고 즐거운 일상을 위한 사려 깊은 물건들.",
    "Explore the shop": "Shop 둘러보기",
    "koaus is a curation shop for small joys and better daily lives.":
      "koaus는 작은 기쁨과 더 나은 일상을 큐레이션하는 숍입니다.",
    "We partner with independent Korean brands that value thoughtful design and everyday beauty. Every pick is selected in Seoul and tested with global buyers before a wider launch.":
      "세심한 디자인과 일상의 아름다움을 중요하게 생각하는 한국의 독립 브랜드와 함께합니다. 모든 상품은 서울에서 선정하고 글로벌 소비자와 검증한 후 더 넓은 시장으로 나아갑니다.",
    "Learn how koaus works": "koaus 이용 방법 보기",
    "Curated with care": "신중한 큐레이션",
    "Only what we truly love and use.": "직접 좋아하고 사용할 물건만 고릅니다.",
    "Independent brands": "독립 브랜드",
    "Supporting small Korean creators.": "한국의 작은 창작자와 브랜드를 응원합니다.",
    "Pre-order, not waste": "낭비 없는 사전 주문",
    "Testing demand before inventory.": "재고를 만들기 전에 수요부터 검증합니다.",
    "Everyday joy": "일상의 기쁨",
    "Objects that fit naturally into life.": "생활에 자연스럽게 스며드는 물건들.",
    "Vote on the next drop": "다음 드롭에 투표하세요",
    "Help choose what launches next.": "다음 출시 상품을 함께 골라주세요.",

    "The koaus": "koaus",
    "shop.": "Shop",
    "Curated in Seoul": "서울에서 큐레이션",
    "Thoughtful Korean objects selected for real routines. Save a pick, register interest, or visit the original Korean listing while the first koaus drop takes shape.":
      "실제 일상을 위해 고른 한국의 좋은 물건들. 마음에 드는 상품을 저장하거나 관심을 등록하고, 첫 koaus 드롭이 완성되는 동안 한국 원문 판매 페이지도 확인해 보세요.",
    "Search by product, maker, or category": "상품명, 브랜드 또는 카테고리 검색",
    "Sort products": "상품 정렬",
    "Featured first": "추천순",
    "Price: low to high": "낮은 가격순",
    "Price: high to low": "높은 가격순",
    "Name: A–Z": "이름순",
    "♡ Saved only": "♡ 저장한 상품만",
    "Filter by category": "카테고리 필터",
    All: "전체",
    "All picks": "전체 상품",
    "Saved only": "저장한 상품만",
    "Prototype catalog: prices are sample USD conversions of the listed KRW price and exclude international shipping, duties, and future launch markup. “Save” is stored only in this browser.":
      "프로토타입 카탈로그입니다. 달러 가격은 원화 판매가를 단순 환산한 예시이며 국제 배송비, 관세와 향후 판매 마진은 포함하지 않습니다. 저장 정보는 현재 브라우저에만 보관됩니다.",
    "No picks found.": "조건에 맞는 상품이 없습니다.",
    "Try another category or search term.": "다른 카테고리나 검색어를 이용해 보세요.",
    "View product": "상품 보기",
    Original: "원문 보기",
    "Original listing": "한국 판매 페이지",
    "Original Korean listing": "한국 판매 페이지",
    "View original Korean listing": "한국 판매 페이지 보기",
    "Launch stage": "출시 단계",
    "Curated from": "상품 출처",
    "Sample converted price. International shipping, duties, and future launch markup are not included.":
      "달러 환산 예시 가격입니다. 국제 배송비, 관세와 향후 판매 마진은 포함하지 않습니다.",
    "Register pre-order interest": "사전예약 관심 등록",
    "Interest registered ✓": "관심 등록 완료 ✓",
    "Save this pick ♡": "이 상품 저장 ♡",
    "Saved to your picks ♥": "저장한 상품 ♥",
    "Why it made the edit": "선정한 이유",
    "A small object with everyday pull.": "매일 손이 가는 작은 물건.",
    "01 · Curation": "01 · 큐레이션",
    "Chosen for daily use": "일상에서 오래 사용할 선택",
    "02 · Demand": "02 · 수요",
    "You help decide the launch": "여러분의 반응이 출시를 결정합니다",
    "Saving or registering interest becomes an early signal before koaus commits to inventory.":
      "저장과 관심 등록은 koaus가 재고를 준비하기 전 확인하는 초기 수요 신호가 됩니다.",
    "03 · Transparency": "03 · 투명성",
    "Start from the source": "원문 정보부터 투명하게",
    "The Korean listing and original KRW price stay visible while koaus tests global interest.":
      "글로벌 관심을 검증하는 동안 한국 원문 판매 페이지와 원화 가격을 함께 공개합니다.",
    "See it in real life": "실제 일상에서 보기",
    "Made for routines, not a studio pedestal.": "전시가 아닌, 실제 일상을 위한 물건.",
    "This prototype uses permission-clear lifestyle footage to show the intended UGC experience. Customer-submitted clips will replace it after contributor consent and usage rights are confirmed.":
      "현재 프로토타입은 사용 권한이 명확한 라이프스타일 영상으로 UGC 경험을 보여줍니다. 추후 참여자의 동의와 사용 권한을 확인한 고객 영상으로 교체합니다.",
    "Footage credit": "영상 출처",
    "Keep browsing": "계속 둘러보기",
    "You may also like.": "이 상품도 추천해요.",
    "View all": "전체 보기",
    "Product not found": "상품을 찾을 수 없습니다",
    "This pick moved.": "현재 판매 목록에 없는 상품입니다.",
    "Return to the shop to see the current edit.": "Shop에서 현재 큐레이션 상품을 확인해 주세요.",
    "Browse the shop": "Shop 둘러보기",
    "Removed from your saved picks.": "저장한 상품에서 삭제했습니다.",
    "Saved on this device. You can find it from the Shop page.":
      "이 기기에 저장했습니다. Shop 페이지에서 다시 확인할 수 있습니다.",
    "Pre-order interest registered on this device. No payment has been taken.":
      "이 기기에 사전예약 관심을 등록했습니다. 결제는 진행되지 않았습니다.",

    "Korean lifestyle curated shop": "한국 라이프스타일 큐레이션 숍",
    "Discover Korean lifestyle goods": "한국 라이프스타일 상품을",
    "before everyone else.": "누구보다 먼저 만나보세요.",
    "Curated stationery, desk goods, and small gifts from Korea — tested with global buyers before full launch.":
      "한국의 문구, 데스크 용품과 작은 선물을 큐레이션하고 정식 출시 전 글로벌 소비자와 가능성을 검증합니다.",
    "Explore Launch Picks": "런칭 후보 상품 보기",
    "✦ Curated in Korea": "✦ 한국에서 큐레이션",
    "♡ Community voted": "♡ 커뮤니티 투표",
    "↗ Global launch": "↗ 글로벌 출시",
    "The discovery gap": "발견의 간극",
    "Korean goods are loved, but still hard to discover globally.":
      "한국 상품은 사랑받지만, 해외에서 발견하기는 여전히 어렵습니다.",
    "For Global Buyers": "글로벌 소비자",
    "Beautiful finds feel out of reach.": "좋은 상품을 발견하고 구매하기 어렵습니다.",
    "Korean products are difficult to discover.": "한국 상품을 한곳에서 발견하기 어렵습니다.",
    "The best new finds are not available overseas yet.": "매력적인 신상품은 아직 해외에서 구매할 수 없습니다.",
    "It is hard to know where to buy with confidence.": "어디서 믿고 구매해야 할지 알기 어렵습니다.",
    "For Korean Brands": "한국 브랜드",
    "For Korean brands": "한국 브랜드",
    "Going global starts with too many unknowns.": "글로벌 진출은 너무 많은 불확실성에서 시작됩니다.",
    "U.S. market response is difficult to predict.": "미국 시장의 반응을 예측하기 어렵습니다.",
    "Shipping, pricing, and content are costly to test.": "배송, 가격과 콘텐츠를 테스트하는 데 비용이 큽니다.",
    "A full launch carries risk before demand is clear.": "수요가 분명하지 않은 상태의 정식 출시는 위험이 큽니다.",
    "Curated launch picks": "큐레이션한 런칭 후보",
    "Vote for what should launch first.": "먼저 출시할 상품에 투표해 주세요.",
    "Save your favorite Korean lifestyle goods and help us decide what to test next.":
      "마음에 드는 한국 라이프스타일 상품을 저장하고 다음 테스트 상품을 함께 결정해 주세요.",
    "Simple by design": "간결한 검증 과정",
    "Good products deserve a thoughtful path to launch.": "좋은 상품에는 세심한 출시 과정이 필요합니다.",
    "Discover curated Korean goods": "큐레이션한 한국 상품 발견",
    "Browse small-batch finds selected for their story, design, and global potential.":
      "스토리, 디자인과 글로벌 가능성을 기준으로 고른 소량 생산 상품을 둘러보세요.",
    "Save or vote for your favorite picks": "마음에 드는 상품을 저장하거나 투표",
    "Your interest tells us what buyers truly want before inventory is committed.":
      "여러분의 관심은 재고를 준비하기 전에 소비자가 실제로 원하는 것을 알려줍니다.",
    "The strongest picks move into a focused, lower-risk global demand test.":
      "반응이 가장 좋은 상품은 집중적이고 위험이 낮은 글로벌 수요 테스트로 이어집니다.",
    "Want to know if your product can work in the U.S. market?":
      "우리 상품이 미국 시장에서도 통할지 궁금하신가요?",
    "koaus helps Korean lifestyle brands test product appeal, price sensitivity, and content hooks before investing in a full U.S. launch.":
      "koaus는 한국 라이프스타일 브랜드가 미국 정식 출시에 투자하기 전 상품 매력도, 가격 민감도와 콘텐츠 반응을 검증하도록 돕습니다.",
    "Mini product checker": "간단 상품 진단",
    "Is your product ready for a small U.S. test?": "우리 상품은 미국 소규모 테스트를 시작할 준비가 되었을까요?",
    "Get a quick directional read on unit economics and launch fit. This is an estimate for early planning—not a financial guarantee.":
      "단위 경제성과 출시 적합도를 빠르게 확인하세요. 초기 기획을 위한 예상치이며 재무적 결과를 보장하지 않습니다.",
    "80–100 Strong fit": "80–100 높은 적합도",
    "60–79 Worth testing": "60–79 테스트 가치 있음",
    "0–59 Needs work": "0–59 개선 필요",
    "Product cost": "상품 원가",
    "Expected U.S. price": "예상 미국 판매가",
    "Shipping cost": "배송비",
    "Marketplace fee rate": "마켓플레이스 수수료율",
    "Product strengths": "상품 강점",
    "Giftable or bundle-friendly": "선물 또는 번들 구성에 적합",
    "Content-friendly product": "콘텐츠 제작에 적합한 상품",
    "Check Launch Fit": "런칭 적합도 확인",
    "Enter your numbers to see estimated profit, margin, and launch fit.":
      "수치를 입력하면 예상 이익, 마진과 런칭 적합도를 확인할 수 있습니다.",
    "Please enter valid values. Cost and price must be greater than 0; shipping and fee rate must be 0 or more.":
      "올바른 값을 입력해 주세요. 원가와 판매가는 0보다 커야 하며 배송비와 수수료율은 0 이상이어야 합니다.",
    "Needs refinement": "개선 필요",
    "Rework price, bundle, or shipping structure before testing.":
      "테스트 전에 가격, 번들 또는 배송 구조를 개선해 보세요.",
    "Strong launch fit": "높은 런칭 적합도",
    "Strong launch candidate. This product is ready for a small U.S. demand test.":
      "가능성이 높은 상품입니다. 미국 소규모 수요 테스트를 시작할 준비가 되었습니다.",
    "Worth testing": "테스트 가치 있음",
    "Test with a bundle or content angle. Try improving the offer before full launch.":
      "번들 또는 콘텐츠 방향으로 테스트하고 정식 출시 전에 제안을 개선해 보세요.",
    "Estimated profit": "예상 이익",
    "Margin rate": "마진율",
    "Marketplace fee": "마켓플레이스 수수료",
    "Launch Fit Score": "런칭 적합도 점수",
    "From the koaus journal": "koaus 저널",
    "Notes for a smarter global launch.": "더 스마트한 글로벌 런칭을 위한 노트.",
    "Get launch notes": "런칭 노트 받기",
    "Buyer insight": "소비자 인사이트",
    "What Korean stationery do U.S. buyers love?": "미국 소비자는 어떤 한국 문구를 좋아할까요?",
    "Four signals that turn a beautiful paper good into a save-worthy global pick.":
      "아름다운 문구를 저장하고 싶은 글로벌 상품으로 만드는 네 가지 신호.",
    Merchandising: "머천다이징",
    "Why giftable bundles work better than single items": "선물용 번들이 단품보다 효과적인 이유",
    "How bundles create a stronger story while making international shipping feel worth it.":
      "번들이 더 강한 상품 스토리를 만들고 국제 배송의 가치를 높이는 방법.",
    "Market testing": "시장 테스트",
    "How to test U.S. demand before Amazon/FBA": "Amazon/FBA 전에 미국 수요를 검증하는 방법",
    "A lean validation path for learning what buyers want before scaling inventory.":
      "재고를 확대하기 전 소비자가 원하는 것을 학습하는 효율적인 검증 과정.",
    "Read the note": "노트 읽기",
    "Your vote shapes the next launch": "여러분의 투표가 다음 출시를 만듭니다",
    "Help us choose what to launch first.": "가장 먼저 출시할 상품을 함께 골라주세요.",
    "Vote for your favorite Korean lifestyle products and get notified when they become available.":
      "좋아하는 한국 라이프스타일 상품에 투표하고 출시 알림을 받아보세요.",

    "Curated Korean lifestyle goods for global buyers.": "글로벌 소비자를 위한 한국 라이프스타일 큐레이션.",
    "Korean lifestyle goods for global buyers.": "글로벌 소비자를 위한 한국 라이프스타일 상품.",
    "♡ Community curated": "♡ 커뮤니티 큐레이션",
    "↻ Small-batch testing": "↻ 소량 수요 테스트",
    "✈ Ships from Seoul": "✈ 서울에서 배송",
    "TikTok · coming soon": "TikTok · 준비 중",
    "Seoul → Everywhere": "서울에서 전 세계로",
    "Your shortlist": "나의 쇼트리스트",
    "Get launch updates": "런칭 소식 받기",
    "Early access from Seoul": "서울에서 전하는 얼리 액세스",
    "Be first to know": "가장 먼저 소식을 받아보세요",
    "Join the koaus launch list.": "koaus 런칭 알림을 신청하세요.",
    "Get new picks, voting updates, and first access when a product is ready.":
      "새로운 상품, 투표 결과와 출시 준비가 완료된 상품의 얼리 액세스를 받아보세요.",
    "Get new picks, voting updates, and first access when a product is ready to launch.":
      "새로운 상품, 투표 결과와 출시 준비가 완료된 상품의 얼리 액세스를 받아보세요.",
    Name: "이름",
    "Your name": "이름을 입력하세요",
    "Email address": "이메일 주소",
    "Favorite category": "관심 카테고리",
    "Choose one": "선택하세요",
    "Choose a category": "카테고리를 선택하세요",
    Stationery: "문구",
    "Desk Goods": "데스크 용품",
    Lifestyle: "라이프스타일",
    "Lifestyle Goods": "라이프스타일 용품",
    "Gift Set": "선물 세트",
    "Gift Sets": "선물 세트",
    "Keep me in the loop": "소식 받아보기",
    "Brand name": "브랜드명",
    "Your brand": "브랜드명을 입력하세요",
    "Product category": "상품 카테고리",
    "Target U.S. price": "목표 미국 판매가",
    Email: "이메일",
    "Work email": "업무용 이메일",
    "What do you want to test?": "어떤 부분을 검증하고 싶으신가요?",
    "A short product description": "상품을 간단히 설명해 주세요",
    "Product appeal, pricing, content angle…": "상품 매력도, 가격, 콘텐츠 방향 등",
    "Send request": "신청 보내기",
    "Send product check request": "상품 진단 신청",
    "Request a product check.": "상품 가능성 진단을 신청하세요.",
    "Share a few details and koaus will review the product’s U.S. test potential.":
      "몇 가지 상품 정보를 남겨주시면 koaus가 미국 시장 테스트 가능성을 검토합니다.",
    "Tell us what you are building. We will follow up about a focused U.S. market test.":
      "준비 중인 상품을 알려주세요. 집중적인 미국 시장 테스트 방법을 안내해 드립니다.",
    Maker: "브랜드",
    "Sample price": "예상 가격",
    "Curated pick": "큐레이션 상품",
    "Product details": "상품 상세",
    "Register pre-order interest": "사전예약 관심 등록",
    "Your shortlist is empty.": "저장한 상품이 없습니다.",
    "Tap a heart on any product to save it here.": "상품의 하트를 눌러 이곳에 저장해 보세요.",
    "Thanks for voting! Your pick helps shape the next launch.":
      "투표해 주셔서 감사합니다. 여러분의 선택이 다음 출시를 만듭니다.",
    "This email is already saved on this device.": "이 이메일은 현재 기기에 이미 저장되어 있습니다.",
    "You're on the prototype launch list. Your details are saved on this device.":
      "프로토타입 런칭 알림 신청이 완료되었습니다. 정보는 현재 기기에 저장됩니다.",
    "Product check request saved for this prototype.": "프로토타입 상품 진단 신청을 저장했습니다.",
    "MVP note: this submission is stored only in your browser until a live email endpoint is connected.":
      "MVP 안내: 실제 이메일 연동 전까지 신청 정보는 현재 브라우저에만 저장됩니다.",
    "MVP note: requests are stored on this device for the frontend prototype.":
      "MVP 안내: 프론트엔드 프로토타입이므로 신청 정보는 현재 기기에만 저장됩니다.",
    "koaus — Curated K-lifestyle Goods": "koaus — 한국 라이프스타일 큐레이션",
    "koaus — Curated Korean Lifestyle Goods": "koaus — 한국 라이프스타일 큐레이션",
    "Shop — koaus": "쇼핑 — koaus",
    "Product — koaus": "상품 — koaus",
  };

  const productTranslations = {
    "Neo Desk Organizer": "네오 데스크 오거나이저",
    "Breeze Tote Bag": "브리즈 토트백",
    "2026 Thread-bound Diary": "2026 사철 다이어리",
    "Stone & Plate Object": "스톤 앤 플레이트 오브제",
    "Lumir R Steel Table Lamp": "루미르 R 스틸 테이블 램프",
    "Chubby Tiger Ceramic Mug": "뚱랑이 세라믹 머그",
    "Vintage Cabin Bag": "빈티지 캐빈 백",
    "Oblong Mug · Stone Beige": "오블롱 머그 · 스톤 베이지",
    "Terry Pencil Pouch": "테리 펜슬 파우치",
    "Pondang Mug & Coaster Set": "퐁당 머그 & 코스터 세트",
    "Soft Cream Pocket Pouch": "소프트 크림 포켓 파우치",
    "Metal Mushroom Mood Light": "메탈 버섯 무드등",
    "A modular organizer that keeps pens, notes, and daily tools visible but neatly divided.":
      "펜, 메모와 매일 쓰는 도구를 한눈에 보이면서도 깔끔하게 나눠 보관하는 모듈형 정리함.",
    "A light nylon tote with a compact profile, contrast trim, and an inner zip pocket.":
      "가벼운 나일론 소재와 배색 테두리, 내부 지퍼 포켓을 갖춘 컴팩트한 토트백.",
    "A fountain-pen-friendly dated diary with tactile paper and a flat-opening binding.":
      "촉감 좋은 종이와 180도로 펼쳐지는 제본을 적용한 만년필 친화형 날짜형 다이어리.",
    "A small sculptural plaster plate for a candle, jewelry, or a quiet bedside object.":
      "캔들, 주얼리 또는 침대 옆 작은 물건을 올려두기 좋은 조형적인 석고 플레이트.",
    "The drop's single lighting pick: sculptural steel designed and made in Korea.":
      "한국에서 디자인하고 제작한 조형적인 스틸 조명으로, 이번 드롭의 유일한 조명 셀렉션.",
    "A cheerful 400 ml ceramic character mug made for small everyday gift moments.":
      "일상의 작은 선물 순간을 위한 유쾌한 400ml 세라믹 캐릭터 머그.",
    "A compact vegetable-tanned sheepskin bag with a zip closure and adjustable strap.":
      "지퍼 여밈과 길이 조절 스트랩을 갖춘 컴팩트한 베지터블 태닝 양가죽 가방.",
    "A softly rounded stone-beige mug that feels like a small ceramic object in the hand.":
      "손 안에서 작은 세라믹 오브제처럼 느껴지는 부드러운 곡선의 스톤 베이지 머그.",
    "A tall terry-cloth pencil pouch with a water-resistant lining for up to 20 pens.":
      "생활 방수 안감과 최대 20개의 펜을 수납할 수 있는 세로형 테리 소재 필통.",
    "A coordinated ceramic mug and soft fabric coaster set ready for gifting.":
      "선물하기 좋게 구성한 세라믹 머그와 부드러운 패브릭 코스터 세트.",
    "A softly quilted pouch referenced from Clam’s Korean-made everyday carry line.":
      "한국에서 제작한 Clam의 데일리 캐리 라인에서 참고한 부드러운 퀼팅 파우치.",
    "A water-resistant lined pouch designed to carry a generous set of pens.":
      "많은 펜을 넉넉히 담을 수 있도록 생활 방수 안감을 적용한 파우치.",
    "A tactile, fountain-pen-friendly diary with a flat-opening thread binding.":
      "촉감 좋은 종이와 180도로 펼쳐지는 사철 제본을 적용한 만년필 친화형 다이어리.",
    "A sculptural Korean-made lamp that turns a working desk into a calmer place.":
      "작업 공간을 더 차분하게 만드는 한국 제작 조형 램프.",
    "A cordless touch light with adjustable brightness for cozy corners.":
      "아늑한 공간에 어울리는 밝기 조절형 무선 터치 조명.",
    "A cheerful character mug selected for an easy, everyday Korean gift moment.":
      "부담 없이 전하는 한국적인 일상 선물로 고른 유쾌한 캐릭터 머그.",
    "Pre-order": "사전예약",
    "Coming soon": "출시 예정",
    "Made in Korea": "한국 제작",
    "Giftable": "선물 추천",
    "Bundle-ready": "세트 구성",
    "Seoul paper": "서울 문구",
    "Seoul Paper": "서울 문구",
    "Desk Setup": "데스크 셋업",
    "Small Space": "작은 공간",
  };

  Object.assign(ko, productTranslations);

  const translateDynamic = (value) => {
    if (ko[value]) return ko[value];
    if (/^\d+ items?$/.test(value)) return `${value.match(/\d+/)[0]}개 상품`;
    if (/^Saved picks: \d+$/.test(value)) return `저장한 상품: ${value.match(/\d+/)[0]}`;
    if (/^Original ₩/.test(value)) return value.replace("Original", "한국 판매가");
    if (/^Save .+/.test(value)) return `${translateDynamic(value.slice(5))} 저장`;
    if (/^Remove .+/.test(value)) return `${translateDynamic(value.slice(7))} 저장 해제`;
    if (/^View .+/.test(value) && !value.includes("original")) return `${translateDynamic(value.slice(5))} 보기`;
    if (value.includes(" · ")) return value.split(" · ").map(translateDynamic).join(" · ");
    return value;
  };

  const originalDocumentTitle = document.title;
  let storedLanguage = "en";
  try {
    storedLanguage = localStorage.getItem(STORAGE_KEY) === "ko" ? "ko" : "en";
  } catch {
    storedLanguage = "en";
  }
  let language = storedLanguage;

  function translateTextNode(node) {
    const current = node.nodeValue;
    const trimmed = current.trim();
    if (!trimmed || node.parentElement?.closest(".language-toggle")) return;
    if (!originalText.has(node)) originalText.set(node, trimmed);
    const original = originalText.get(node);
    const next = language === "ko" ? translateDynamic(original) : original;
    if (trimmed !== next) node.nodeValue = current.replace(trimmed, next);
  }

  function translateAttributes(element) {
    ["placeholder", "aria-label", "title"].forEach((attribute) => {
      if (!element.hasAttribute?.(attribute)) return;
      if (!originalAttributes.has(element)) originalAttributes.set(element, {});
      const stored = originalAttributes.get(element);
      if (!stored[attribute]) stored[attribute] = element.getAttribute(attribute);
      const original = stored[attribute];
      element.setAttribute(attribute, language === "ko" ? translateDynamic(original) : original);
    });
  }

  function translateTree(root = document.body) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE) return;
    translateAttributes(root);
    root.querySelectorAll("*").forEach(translateAttributes);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node);
  }

  function updateControls() {
    document.documentElement.lang = language === "ko" ? "ko" : "en";
    document.body.classList.toggle("lang-ko", language === "ko");
    document.title =
      language === "ko"
        ? ko[originalDocumentTitle] ||
          (originalDocumentTitle.endsWith(" — koaus")
            ? `${translateDynamic(originalDocumentTitle.replace(" — koaus", ""))} — koaus`
            : originalDocumentTitle)
        : originalDocumentTitle;
    document.querySelectorAll(".language-toggle").forEach((button) => {
      const label = language === "ko" ? "EN" : "KR";
      const accessibleLabel = language === "ko" ? "View in English" : "한국어로 보기";
      if (button.textContent !== label) button.textContent = label;
      if (button.getAttribute("aria-label") !== accessibleLabel) button.setAttribute("aria-label", accessibleLabel);
      if (button.getAttribute("title") !== accessibleLabel) button.setAttribute("title", accessibleLabel);
    });
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Language still changes for the current visit when storage is unavailable.
    }
    translateTree();
    updateControls();
    window.dispatchEvent(new CustomEvent("koaus:languagechange", { detail: { language } }));
  }

  function insertControl() {
    const target = document.querySelector(".header-actions") || document.querySelector(".nav-links");
    if (!target || target.querySelector(".language-toggle")) return;
    const button = document.createElement("button");
    button.className = "language-toggle";
    button.type = "button";
    const anchor = target.querySelector(".header-cta, .nav-cta");
    target.insertBefore(button, anchor || null);
    button.addEventListener("click", () => setLanguage(language === "ko" ? "en" : "ko"));
  }

  insertControl();
  translateTree();
  updateControls();

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => translateTree(node));
    });
    updateControls();
  });
  observer.observe(document.body, { childList: true, subtree: true });

  window.koausI18n = {
    getLanguage: () => language,
    setLanguage,
    apply: translateTree,
    t: (value) => (language === "ko" ? translateDynamic(value) : value),
  };
})();
