# DESIGN.md

## 气质与意象
一只被翻到折痕的旧杂志封面——纸张微黄，墨色沉稳，偶尔一道朱红划过。不是画廊的白墙，是旧书店里叠到天花板的书脊。克制，但有自己的温度。东西在流动，空间是安静的。

## 视觉策略
- **编辑排版驱动**：双栏布局、网格错位、字号极端对比，像杂志内页而非电商
- **图形语言**：细线分隔、直角、轻微旋转的卡片（break-right/break-left），"打破网格"但不混乱
- **纹理叠加**：噪点纹理（noise overlay 0.015 opacity）+ 网格线（grid overlay 0.4 opacity），给白纸以质感

## 配色方案
- **主背景**：`#F5F3EF`（暖米白，未漂白的纸）
- **次背景**：`#EBE8E1`（off-white，略深的纸色）
- **深色区块**：`#1A1A18`（近墨，带暖调）
- **主文字**：`#2A2825`（gray-900，近黑不纯黑）
- **辅助文字**：`#6B6760`（gray-600，标签和次要信息）
- **浅灰**：`#A8A49C`（gray-300，淡标签）
- **极浅灰**：`#E0DDD6`（gray-100，边框和分割）
- **强调色**：`#C43E2C`（朱红，极少使用——路标、公益金、划线）
- **强调色透明**：`rgba(196, 62, 44, 0.08)`（强调色微光，hero背景）

## 字体排版
- **中文衬线**：SerifDisplay（系统 Times New Roman / SimSun / Noto Serif SC fallback）
- **英文无衬线**：Inter
- **等宽**：SF Mono / Menlo / Monaco / Cascadia Code（标签、注释、价格）
- **Hero标题**：clamp(60px, 12vw, 160px)，letter-spacing 0.04em
- **Section标题**：clamp(32px, 5vw, 64px)
- **Manifesto pull-quote**：clamp(22px, 2.4vw, 36px)，italic，左侧朱红竖线
- **标签/注释**：9-11px，letter-spacing 2-4px，大写

## 动效与交互
- **运动性格**：克制、沉稳，纸张翻动感
- **Hero入场**：fadeUp 1.4s ease-out
- **滚动揭示**：opacity 0→1，translateY 40px→0，0.8s ease-out
- **自定义光标**：8px朱红圆点，hover交互元素时放大40px带边框圆环，mix-blend-mode: difference
- **Cycle Ring**：40s匀速旋转，三颗轨道点8s公转
- **卡片微旋转**：break-right +0.8deg，break-left -0.6deg
- **访客计数器**：递增动画，滚动到视口时触发
- **禁止**：弹跳、旋转、脉冲、大幅位移

## 页面结构
1. **Hero**：全屏居中标题 Messenger + 循环空间（italic），下方英文+中文副标题，朱红斜线装饰
2. **Manifesto**：双栏——左栏故事文本（pull-quote带朱红左边线）+ 右栏纹理占位图（底部渐变遮罩+文字）
3. **About（折叠）**：点击展开完整品牌故事，选品标准四词
4. **Items**：3列网格6张卡片，break-right/break-left微错位，4:5比例占位，标签+名称+描述+价格
5. **Return**：双栏——左栏文字+步骤条 + 右栏退回比例表格（朱红顶线）
6. **Charity Fund**：深色背景，左栏旋转圆环+轨道点 + 右栏20%大字+公益说明
7. **Attitude Strip**：居中大字"审美不是特权"，pretentious划线
8. **Visitors**：居中数字计数器+副标题
9. **Footer**：深色底，品牌签名四词 + 链接

## 设计禁忌
- 禁止圆角超过4px（仅cycle-dot/process-step的圆点除外）
- 禁止渐变背景（radial-gradient仅用于微纹理，不可作为主视觉）
- 禁止阴影/发光效果
- 禁止动画时长超过1.4s
- 禁止纯白背景（#FFF），必须用 #F5F3EF
- 禁止emoji作为视觉元素
- 禁止超过3种字族
