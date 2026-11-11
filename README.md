# Emerson Portfolio

独立编辑式个人作品集，基于 Astro 静态站点生成器构建。

结构：Introduction / Selected Work / Field Notes / Experience / About / Contact。

## 技术栈

- **框架**: Astro 5（静态输出模式）
- **语言**: TypeScript
- **部署**: Cloudflare Pages / 任意静态托管
- **无平台绑定**: 不依赖任何云平台专属逻辑，可在任意环境运行

## 语言版本

- 英文: `/`
- 中文: `/zh/`
- 法语: `/fr/`
- 粤语: `/yue/`（暂时停用，仅保留提示页；原内容完整保留在 `src/legacy/translations.ts`）

## 页面

| 路径 | 说明 |
| --- | --- |
| `/` | 首页（单页六个区块，锚点滚动） |
| `/work/delta/` | Delta 项目案例页 |
| `/journal/<slug>/` | 田野手记详情页（3 篇） |
| `/zh/...`、`/fr/...` | 对应语言版本 |

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器（端口 5000，被占用时自动顺延）
pnpm dev

# 构建生产版本
pnpm build

# 预览构建结果
pnpm preview
```

## 部署

### Cloudflare Pages

1. 推送代码到 GitHub
2. 在 Cloudflare Pages 连接仓库
3. 构建命令: `pnpm install && pnpm run build`
4. 输出目录: `dist`

### 任意静态托管

```bash
pnpm build
# 将 dist/ 目录部署到任意静态文件服务器
```

## 项目结构

```
├── src/
│   ├── components/
│   │   ├── Nav.astro              # 固定导航、语言切换、移动菜单
│   │   ├── Hero.astro             # 首页开篇
│   │   ├── SelectedWork.astro     # 精选作品（Delta 大幅 + 网站项目）
│   │   ├── FieldNotes.astro       # 田野手记非对称网格
│   │   ├── Experience.astro       # 时间线
│   │   ├── About.astro            # 关于 + 工作之外
│   │   ├── Contact.astro          # 深色联系区块
│   │   ├── Footer.astro
│   │   ├── HomePage.astro         # 首页组装
│   │   ├── DeltaCase.astro        # 案例页模板
│   │   └── JournalArticle.astro   # 手记文章模板
│   ├── content/                   # 内容层（类型 + 三语文案）
│   │   ├── types.ts
│   │   ├── en.ts / zh.ts / fr.ts
│   │   └── index.ts               # 语言注册、链接与 slug 工具
│   ├── layouts/
│   │   └── Layout.astro           # HTML 骨架、滚动显现、导航状态
│   ├── pages/
│   │   ├── index.astro            # EN
│   │   ├── zh|fr/index.astro      # ZH / FR
│   │   ├── work/delta.astro       # EN 案例页（zh|fr 同构）
│   │   ├── journal/[slug].astro   # EN 手记（zh|fr 同构）
│   │   └── yue/index.astro        # 粤语停用提示页
│   ├── legacy/                    # 改版前的组件与四语文案（仅存档）
│   └── styles/
│       └── global.css             # 设计令牌、reveal、可访问性
├── public/
│   ├── favicon.svg
│   └── images/                    # 实拍照片 + Delta 概念站截图
├── astro.config.mjs               # i18n 路由（en / zh / fr）
├── DESIGN.md                      # Delta 项目的设计文档
└── README.md
```

## 注意事项

- 图片使用绝对路径引用，部署时随 `dist/` 一起输出
- 字体通过 Google Fonts CDN 加载（Newsreader / Noto Serif SC / Inter）
- 所有交互逻辑在客户端完成，无需服务器
- 内容遵循「不虚构」原则：Delta 为概念项目，站点中的商品与数据均为演示数据
