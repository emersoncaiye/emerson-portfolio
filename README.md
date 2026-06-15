# Emerson Portfolio

多语言个人简历作品集网站，基于 Astro 静态站点生成器构建。

## 技术栈

- **框架**: Astro 5.0（静态输出模式）
- **语言**: TypeScript
- **部署**: Cloudflare Pages / 任意静态托管
- **无平台绑定**: 不依赖任何云平台专属逻辑，可在任意环境运行

## 语言版本

- 英文: `/`
- 中文: `/zh/`
- 粤语: `/yue/`
- 法语: `/fr/`

## 本地开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认端口 4321）
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
│   │   └── Resume.astro          # 核心简历组件（含所有样式和交互）
│   ├── i18n/
│   │   └── translations.ts       # 四语数据层
│   ├── layouts/
│   │   └── Layout.astro          # HTML 骨架
│   ├── pages/
│   │   ├── index.astro           # EN 页面
│   │   ├── zh/index.astro        # ZH 页面
│   │   ├── fr/index.astro        # FR 页面
│   │   └── yue/index.astro       # YUE 页面
│   └── styles/
│       └── global.css            # 全局样式
├── public/
│   ├── favicon.svg               # E 字母图标
│   └── images/                   # 照片资源
├── astro.config.mjs              # Astro 配置（含 i18n 路由）
├── tsconfig.json                 # TypeScript 配置
├── package.json                  # 项目依赖
├── DESIGN.md                     # 设计规范文档
└── README.md                     # 本文件
```

## 环境变量

本项目无需任何环境变量，纯静态站点，无后端依赖。

## 注意事项

- 图片使用相对路径引用，部署时随 dist/ 一起输出
- 字体通过 Google Fonts CDN 加载（.cn 域名）
- 所有交互逻辑在客户端完成，无需服务器
