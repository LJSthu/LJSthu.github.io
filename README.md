
## 🚀 快速开始

```bash
cd academic-portfolio
bun install
bun run dev
```

访问 http://localhost:3000 查看网站。

## 📁 项目结构

```
academic-portfolio/
├── content/              # Markdown内容文件
│   ├── research.md      # 研究页面
│   ├── talks.md         # 演讲页面
│   ├── teaching.md      # 教学页面
│   ├── misc.md          # 其他页面
│   └── README.md        # 内容编辑说明
├── src/
│   ├── app/             # Next.js页面
│   │   ├── page.tsx     # 主页
│   │   ├── research/    # 研究页面
│   │   ├── talks/       # 演讲页面
│   │   ├── teaching/    # 教学页面
│   │   └── misc/        # 其他页面
│   ├── components/      # React组件
│   │   ├── Navigation.tsx
│   │   └── MarkdownContent.tsx
│   └── lib/             # 工具函数
├── public/              # 静态文件
│   ├── papers/         # 论文PDF
│   ├── slides/         # 演讲幻灯片
│   └── syllabus/       # 教学大纲
├── HOW_TO_USE.md        # 完整使用指南
└── MARKDOWN_GUIDE.md    # Markdown格式指南
```

## 📖 使用指南

### 1. 编辑主页信息

编辑 `src/app/page.tsx` 文件，修改：
- 姓名、单位、邮箱、地址
- 个人简介
- 照片链接
- 社交媒体链接

### 2. 编辑子页面内容

所有子页面内容都在 `content/` 文件夹中：

#### Research页面示例

```markdown
**[论文标题](https://arxiv.org/abs/xxxx.xxxxx)**
作者1, **你的名字**, 作者3.
arXiv:xxxx.xxxxx. 2025.

[abstract](#) [arXiv](https://arxiv.org/abs/xxxx) [code](https://github.com/example)

---
```

#### 彩色按钮自动渲染

系统会根据链接文本自动应用颜色：
- `[abstract](#)` → 🟠 橙色
- `[arXiv](url)` → 🔵 蓝色
- `[code](url)` → 🔴 粉色
- `[slides/poster](url)` → 🔷 浅蓝色
- `[paper](url)` → 🔵 蓝色
- `[data](url)` → 🔵 蓝色
- `[video](url)` → 🟣 紫色

### 3. 添加文件

将PDF等文件放在 `public/` 文件夹：
- `public/papers/` - 论文
- `public/slides/` - 幻灯片
- `public/syllabus/` - 教学大纲

在markdown中使用：`[PDF](/papers/paper.pdf)`

## 📄 页面说明

| 页面 | 路径 | 内容文件 | 说明 |
|------|------|----------|------|
| 主页 | `/` | `src/app/page.tsx` | 个人信息和简介 |
| Research | `/research` | `content/research.md` | 研究成果和论文 |
| Talks | `/talks` | `content/talks.md` | 演讲和报告 |
| Teaching | `/teaching` | `content/teaching.md` | 教学经历 |
| Miscellanea | `/misc` | `content/misc.md` | 其他信息 |

## 🎨 样式定制

- 全局样式：`src/app/globals.css`
- 组件样式：各组件文件中的 Tailwind CSS 类名
- 按钮颜色：`src/components/MarkdownContent.tsx` 中的 `getLinkButtonClass` 函数

## 📚 详细文档

- **[HOW_TO_USE.md](./HOW_TO_USE.md)** - 完整使用指南
- **[MARKDOWN_GUIDE.md](./MARKDOWN_GUIDE.md)** - Markdown格式详细说明
- **[content/README.md](./content/README.md)** - 内容管理说明

## 🛠️ 技术栈

- **框架**: Next.js 15 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **Markdown**: react-markdown, remark-gfm, gray-matter
- **包管理**: Bun

## 📦 构建和部署

### 开发环境
```bash
bun run dev
```

### 生产构建
```bash
bun run build
```

### 部署到Netlify
项目已配置 `netlify.toml`，可直接部署到Netlify。

## ⚙️ 自定义功能

### 添加新的按钮颜色

编辑 `src/components/MarkdownContent.tsx`：

```typescript
const getLinkButtonClass = (text: string): string => {
  // ... 现有代码 ...
  else if (lowerText === 'your-new-button') {
    return 'bg-[#hex-color] hover:bg-[#hover-color] text-white';
  }
  // ...
};
```

### 添加新页面

1. 在 `src/app/` 创建新文件夹和 `page.tsx`
2. 在 `content/` 创建对应的 `.md` 文件
3. 更新 `src/components/Navigation.tsx` 添加导航链接

## 🐛 故障排除

### Markdown不渲染
- 检查markdown文件格式是否正确
- 确保front matter正确（`---` 包围的部分）

### 按钮颜色不显示
- 确保链接文本包含关键词（abstract, arXiv等）
- 检查链接是否在单独的段落中

### 页面404错误
- 运行 `bun run build` 重新构建
- 检查文件路径是否正确

## 📝 示例内容

项目已包含示例内容，展示了正确的markdown格式和渲染效果。您可以直接在这些示例基础上修改。

## 🤝 贡献

欢迎提出问题和建议！

## 📄 许可

本项目仅供学习和个人使用。

---

**开始使用**: 阅读 [HOW_TO_USE.md](./HOW_TO_USE.md) 获取详细指南

**Markdown格式**: 查看 [MARKDOWN_GUIDE.md](./MARKDOWN_GUIDE.md) 了解内容格式

**问题反馈**: 如有问题，请检查文档或创建issue
