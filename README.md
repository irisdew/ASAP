>**※기획서 작성 양식입니다.**  
**기획서 작성 시, 설명된 부분은 제거하고 기입해주세요.**

## 1. 웹 서비스 소개
- 웹 서비스 주제에 대한 프로젝트명과 상세 설명(선정 배경 및 문제 정의)을 작성합니다.
    - 예시) 오늘 뭐 입지? : 사용자의 이미지 업로드를 통한 스타일링 제시 서비스

(미정)
amazon review data에서 keyword 추출("fit", "greatly", "terrible", "bad", "unsatisfied")
내가 선호하는 키워드 ("fit", "bigger") 를 고르면
키워드에 해당하는 리뷰가 많은 상품을 추천 (아마존 상품 페이지로 링크 연결)
추천에 대한 유저의 반응 좋아요, 싫어요 입력받고
유저 페이지에 좋아하는 상품, 싫어하는 상품 아카이빙

## 2. 스토리보드
- 웹 서비스로 구현하기 위해 어떤 내용이 들어가야 하는지, 어떤 결과물이 나올지 시뮬레이션을 진행합니다.
- 사용자의 행동에 대해 묘사하는 유저 시나리오를 바탕으로 대략적인 화면 구성 및 이미지, 설명, 액션 등을 포함하여 스토리보드를 만듭니다.

(아직 미정)

![process](https://cdn.discordapp.com/attachments/841894280904572938/842292326986022912/7d4065285728dd96.png)

## 3. 프로젝트 구성
1. 필요한 데이터셋
    - 주제를 웹 서비스로 구현하기 위해 필요한 데이터셋을 수집합니다.
    - amazon review data 
    - https://jmcauley.ucsd.edu/data/amazon/
    - http://deepyeti.ucsd.edu/jianmo/amazon/index.html
    Amazon Fashion "review", "metadata"
    
    
Amazon Fasion "review" sample data
```
    {'asin': 'B00008JOQI',
 'overall': 5.0,
 'reviewText': 'Good quality',
 'reviewTime': '09 2, 2016',
 'reviewerID': 'AL5UUEGXJFDGU',
 'reviewerName': 'Troy K',
 'style': {'Color:': ' White', 'Size:': ' 19 - 35'},
 'summary': 'Five Stars',
 'unixReviewTime': 1472774400,
 'verified': True}
 ```
* asin - ID of the product, e.g. 0000013714
* reviewText - text of the review
* overall - rating of the product
* reviewTime - time of the review (raw)

2. 기술 스택 및 라이브러리
    - 웹 서비스 제작을 위해 필요한 tool을 정리합니다.

    | 분류 | Tools | 목적 |
    | ------ | ------ | ------ |
    | Server | Django | 웹 서버 구동 |
    | Server | autopep8 | 코드 컨벤션 통일 |
    | Front | React | 웹 화면 구현 |
    | Front | eslint, prettier | 코드 컨벤션 통일 |



## 4. 구현 기능
- 구현해야 하는 세부 기능들을 명세하고, 우선순위를 설정합니다. 이후 우선순위를 바탕으로 개발을 진행합니다.
- 이후 구현된 기능에 알맞는 스크린샷, 영상 등을 추가합니다.

(미정)

1. **필수 구현**
    - 1순위 :
    - 2순위 :
    - 3순위 :
2. **선택 구현**
    - 1순위 :
    - 2순위 :
    - 3순위 :



## 5. 와이어프레임
- 디자인 혹은 개발을 시작하기 전, 발생될 문제를 미리 확인하기 위해 각 페이지별로 세부적으로 어떤 정보가 어떻게 들어갈지(구성 방식, 콘텐츠, 기능 등) 구성합니다.
- 파워 포인트, [Moqups](https://moqups.com/), [UXPin](https://www.uxpin.com/) 등을 활용하여 작성할 수 있습니다.

(아직 미정)
아래는 초기기획이었던 옷챠에 대한 와이어프레임 입니다
https://www.figma.com/file/DViy7TG567Y3on7fL3mpzJ/Untitled?node-id=2%3A46


## 6. 세부 일정
- 효율적인 프로젝트 수행을 위해 구현 기능의 우선순위를 바탕으로 주차별 세부 일정을 기획합니다.
- 일정은 수정될 수 있으며, 수정 시에 기획서 반영 및 팀원 공유 등을 통해 업무 관리를 합니다.

(미정)
1. 데이터 분석, EDA
2. 기획 확정
3. 웹 개발


## 7. 역할

| 이름 | 담당 업무 |
| ------ | ------ |
| 강경림 | 프론트엔드 |
| 윤맑은이슬 | 프론트엔드  |
| 김현광 | 백엔드  |
| 이지민 | 백엔드 |
| 이혁준 | 백엔드 |
| 박예찬 | 인공지능 |



## 8. 배운 점
- 인공지능 프로젝트에서 배운 점과 느낀 점 등을 정리합니다.

