# Content Management

这个文件夹包含所有页面的markdown内容。您可以直接编辑这些文件来更新网站内容。

## 文件说明

- `research.md` - 研究成果页面
- `talks.md` - 演讲报告页面
- `teaching.md` - 教学经历页面
- `misc.md` - 其他信息页面

## 使用方法

1. 直接编辑对应的 `.md` 文件
2. 保存文件后，网站会自动更新
3. 支持标准Markdown语法，包括：
   - 标题 (`#`, `##`, `###`)
   - 粗体 (`**text**`)
   - 斜体 (`*text*`)
   - 链接 (`[text](url)`)
   - 列表 (`-` 或 `1.`)
   - 分隔线 (`---`)

## Front Matter

每个文件顶部的 `---` 之间的内容是元数据（front matter），例如：

```markdown
---
title: Page Title
---
```

## 示例

### 添加一篇论文

在 `research.md` 中：

```markdown
### 论文标题
**作者**: Your Name, Co-author
**状态**: Under Review

论文简介和主要发现。

[PDF](/papers/paper.pdf) | [arXiv](https://arxiv.org)

---
```

### 添加一个演讲

在 `talks.md` 中：

```markdown
### 演讲标题
**日期**: 2026年1月
**地点**: 会议/大学名称
**位置**: 城市, 国家

[幻灯片](/slides/talk.pdf)

---
```
