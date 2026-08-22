# 새 프로젝트 추가 가이드

이 문서는 사이트에 새 Design 프로젝트나 Research 케이스 스터디를 추가할 때 참고하는 체크리스트입니다.

---

## 1. Design 프로젝트 카드 추가하기

Design 탭의 카드는 더 이상 HTML에 직접 작성하지 않습니다. **`assets/data/design-projects.json`** 한 곳만 수정하면 됩니다. `content/design.html`은 건드릴 필요가 없습니다.

### 1-1. 새 연도가 이미 있는 경우

`assets/data/design-projects.json`에서 해당 연도의 `items` 배열에 새 객체를 추가합니다.

```json
{
  "title": "프로젝트 이름: 짧은 설명",
  "description": "카드에 보일 한두 문장 설명.",
  "meta": "Jan 2027 – Mar 2027 · 소속/역할",
  "href": null,
  "icon": "<svg class=\"icon\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\" viewbox=\"0 0 24 24\">...</svg>"
}
```

- **상세 페이지가 없는 프로젝트**: `"href": null`로 두면 자동으로 클릭 불가능한 정적 카드(`project-card-static`)로 렌더링됩니다.
- **상세 페이지가 있는 프로젝트**: `"href": "projects/파일명.html"`을 넣으면 클릭 가능한 카드가 됩니다. (1-3 참고)
- **아이콘**: 기존 카드 중 비슷한 느낌의 `icon` 값을 복사해서 `path`/`rect` 등 좌표만 바꾸는 게 제일 빠릅니다. [Lucide 아이콘](https://lucide.dev)에서 SVG를 그대로 가져와 `class="icon"`만 붙여도 됩니다.

### 1-2. 새 연도를 추가해야 하는 경우

배열 맨 앞(최신 연도가 위로 오도록)에 새 연도 블록을 추가합니다.

```json
{
  "year": "2027",
  "items": [ /* 위 형식의 항목들 */ ]
}
```

### 1-3. 프로젝트 상세 페이지가 필요한 경우

`projects/` 폴더의 기존 파일(예: `projects/blafard.html`) 하나를 복사해서 이미지·텍스트만 교체하세요. `assets/css/styles.css`와 `assets/js/project.js`(라이트박스용)를 그대로 사용합니다. 이미지는 `assets/images/프로젝트명/` 폴더에 넣습니다.

---

## 2. Research 케이스 스터디 추가하기

Research는 두 부분으로 이루어져 있습니다.

### 2-1. 인덱스에 항목 추가

`content/research.html`에서 해당 프로그램(F-01, D-01 등이 속한 그룹)의 `research-index-list` 안에 한 줄 추가합니다.

```html
<a class="research-index-item" href="research/새파일명.html">
  <span class="research-code">X-05</span>
  <span>
    <strong>케이스 스터디 제목</strong>
    <small>한 줄 요약.</small>
  </span>
</a>
```

새 연구 프로그램(그룹) 자체를 추가하려면 `research-program` 블록 전체를 복사해서 제목/부제/리스트를 바꾸면 됩니다.

### 2-2. 케이스 스터디 페이지 만들기

`research/` 폴더의 기존 파일(예: `research/r01_discovering_role.html`)을 복사해서 새 파일명으로 저장합니다. 이 페이지들은 공용 `research/styles.css`를 불러오므로 `<head>`의 `<link href="styles.css">`는 그대로 두면 됩니다.

내용을 채운 뒤 `FINAL_QA.md`에 있던 것과 같은 방식으로 링크가 깨지지 않았는지 한 번 확인하는 걸 권장합니다.

---

## 3. 색상/디자인 토큰을 바꾸고 싶을 때

배경색·글자색·강조색 등 전체 사이트 공통 색상은 **`assets/css/tokens.css`** 한 파일에서만 관리합니다. `assets/css/styles.css`와 `research/styles.css`가 모두 이 파일을 `@import`해서 값을 가져오므로, 색을 바꿀 때는 `tokens.css`만 수정하면 사이트 전체에 반영됩니다. 다른 CSS 파일의 `:root`에 색상 변수를 새로 추가하지 마세요 — 다시 중복이 생깁니다.

레이아웃 크기·폰트·타이포그래피 스케일(`--page`, `--rail`, `--type-*` 등)은 Research 페이지 전용이라 `research/styles.css`에 그대로 둡니다.
