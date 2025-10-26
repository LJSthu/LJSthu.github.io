# 学术个人网站使用指南

这是一个完美复刻的学术个人主页，采用markdown驱动的内容管理系统。

## 📁 项目结构

```
academic-portfolio/
├── content/              # Markdown内容文件
│   ├── research.md      # 研究页面内容
│   ├── talks.md         # 演讲页面内容
│   ├── teaching.md      # 教学页面内容
│   ├── misc.md          # 其他页面内容
│   └── README.md        # 内容编辑说明
├── src/
│   ├── app/             # 页面路由
│   │   ├── page.tsx     # 主页
│   │   ├── research/    # 研究页面
│   │   ├── talks/       # 演讲页面
│   │   ├── teaching/    # 教学页面
│   │   └── misc/        # 其他页面
│   └── components/      # 共享组件
│       ├── Navigation.tsx
│       └── MarkdownContent.tsx
```

## 🎯 如何使用

### 1. 编辑主页信息

编辑 `src/app/page.tsx` 文件中的个人信息：
- 姓名
- 单位
- 邮箱
- 地址
- 个人简介
- 照片链接
- 社交媒体链接

### 2. 编辑子页面内容

所有子页面的内容都在 `content/` 文件夹中，使用Markdown格式：

#### 研究页面 (`content/research.md`)
```markdown
### 论文标题
**作者**: Your Name, Co-author
**状态**: Under Review

论文简介

[PDF](/papers/paper.pdf) | [arXiv](https://arxiv.org)

---
```

#### 演讲页面 (`content/talks.md`)
```markdown
### 演讲标题
**日期**: 2026年1月
**地点**: 会议名称
**位置**: 城市, 国家

[幻灯片](/slides/talk.pdf)

---
```

#### 教学页面 (`content/teaching.md`)
```markdown
### 课程名称 (课程代码)
**学期**: Fall 2025
**层次**: Graduate
**学校**: University Name

课程描述

[教学大纲](/syllabus/course.pdf)

---
```

#### 其他页面 (`content/misc.md`)
添加任何其他信息，如获奖、服务、资源链接等。

### 3. 支持的Markdown语法

- **标题**: `#`, `##`, `###`
- **粗体**: `**文本**`
- **斜体**: `*文本*`
- **链接**: `[文本](URL)`
- **列表**:
  - 无序列表: `- 项目`
  - 有序列表: `1. 项目`
- **分隔线**: `---`

### 4. 添加文件

将PDF、幻灯片等文件放在 `public/` 文件夹中：
- `public/papers/` - 论文PDF
- `public/slides/` - 演讲幻灯片
- `public/syllabus/` - 教学大纲

然后在markdown中使用相对路径引用：`[PDF](/papers/paper.pdf)`

## 🚀 运行网站

```bash
cd academic-portfolio
bun run dev
```

访问 http://localhost:3000 查看网站。

## 📝 页面说明

1. **Home (/)** - 主页，显示个人信息和简介
2. **Research (/research)** - 研究成果和论文列表
3. **Talks (/talks)** - 演讲和报告记录
4. **Teaching (/teaching)** - 教学经历和课程
5. **Miscellanea (/misc)** - 其他信息

## 🎨 自定义样式

如需修改样式，编辑：
- `src/app/globals.css` - 全局样式
- `src/components/*.tsx` - 组件样式

## 📦 部署

使用 Netlify 部署：
```bash
bun run build
```

## 💡 提示

- 保存markdown文件后，页面会自动更新
- 所有链接都会自动渲染为蓝色可点击链接
- 使用 `---` 分隔不同的条目
- Front matter (文件顶部的 `---` 之间的内容) 用于存储页面元数据

## ❓ 常见问题

**Q: 如何添加新页面？**
A: 在 `src/app/` 下创建新文件夹和 `page.tsx` 文件，并在 `content/` 中创建对应的 `.md` 文件。

**Q: 如何修改导航菜单？**
A: 编辑 `src/components/Navigation.tsx` 文件。

**Q: 图片如何显示？**
A: 将图片放在 `public/` 文件夹中，然后使用 `/image.jpg` 引用。

---

祝您使用愉快！🎓
