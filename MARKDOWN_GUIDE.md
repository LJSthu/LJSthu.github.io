# Markdown 内容格式指南

本指南详细说明如何使用markdown来编写各个页面的内容，以获得与原网站相同的渲染效果。

## 📋 Research 页面格式

### 基本结构

```markdown
---
title: Research
---

## Research interests

- 研究兴趣1
- 研究兴趣2
- 研究兴趣3

## Preprints

- **[论文标题](论文链接)**
  作者1, **你的名字**, 作者3.
  arXiv:xxxx.xxxxx. 年份.
  [abstract](#) [arXiv](链接) [code](链接) [slides/poster](链接)

## Publications

- **[论文标题](论文链接)**
  作者列表, **你的名字**, 作者列表.
  *期刊或会议名称*, 卷号(期号), 年份.
  [abstract](#) [paper](链接) [arXiv](链接)
```

### 按钮链接颜色

系统会自动根据链接文本渲染不同颜色的按钮：

- `[abstract](#)` → 橙色按钮 (#eaad51)
- `[arXiv](链接)` → 蓝色按钮 (#5dbfd8)
- `[code](链接)` → 粉红色按钮 (#e09a8e)
- `[slides/poster](链接)` → 浅蓝色按钮 (#cadbe0)
- `[paper](链接)` → 蓝色按钮 (#5dbfd8)
- `[data](链接)` → 蓝色按钮 (#5dbfd8)
- `[video](链接)` → 紫色按钮 (#8f729e)

### 重要规则

1. **每篇论文是一个列表项**：以 `- ` 开头
2. **论文标题**必须用粗体和链接：`**[标题](链接)**`
3. **你的名字**要用粗体标记：`**Your Name**`
4. 作者列表、期刊信息、按钮链接各占一行，用2个空格缩进
5. 期刊/会议名称用斜体：`*Journal Name*`
6. 按钮链接要单独一行，用空格分隔
7. **不要**使用`---`分隔符（已不需要）

### 完整示例

```markdown
- **[Covariate Adjustment Cannot Hurt: Treatment Effect Estimation](https://arxiv.org/abs/2509.03050)**
  Xinyi Wang, **Shuangning Li**.
  arXiv:2509.03050. 2025.
  [abstract](#) [arXiv](https://arxiv.org/abs/2509.03050) [code](https://github.com/example)

- **[Maxway CRT: Improving the Robustness of Model-X Inference](https://academic.oup.com/jrsssb)**
  **Shuangning Li**, Molei Liu.
  *Journal of the Royal Statistical Society: Series B (JRSSB)*, 85(5), 2023.
  [abstract](#) [paper](https://academic.oup.com/jrsssb) [arXiv](https://arxiv.org/) [code](https://github.com/example)
```

## 📋 Talks 页面格式

```markdown
---
title: Talks
---

## Upcoming Talks

**演讲标题**
日期
会议/研讨会名称
Location: 城市, 国家

---

## Past Talks

**演讲标题**
日期
会议/研讨会名称
Location: 城市, 国家

[slides](链接) [video](链接)

---
```

## 📋 Teaching 页面格式

```markdown
---
title: Teaching
---

## Current Courses

**课程名称 (课程代码)**
学期
课程层次
学校名称

课程描述。

[syllabus](链接)

---

## Past Courses

**课程名称 (课程代码)**
学期
课程层次
学校名称

课程描述。

---

## Teaching Interests

- 教学兴趣1
- 教学兴趣2
- 教学兴趣3
```

## 📋 Miscellanea 页面格式

```markdown
---
title: Miscellanea
---

## Service

- **角色**: 详细信息
- **委员会**: 详细信息

---

## Awards and Honors

- **奖项名称**, 机构, 年份
- **荣誉名称**, 组织, 年份

---

## Resources

- [资源名称](链接)
- [资源名称](链接)
```

## 💡 格式提示

### 1. 标题层级

- `##` - 主要章节（Research interests, Preprints, Publications）
- `###` - 不推荐使用（会显示为子标题）

### 2. 列表

```markdown
- 无序列表项1
- 无序列表项2

1. 有序列表项1
2. 有序列表项2
```

### 3. 强调

```markdown
**粗体文本**
*斜体文本*
```

### 4. 链接

```markdown
[链接文本](URL)
```

### 5. 分隔线

```markdown
---
```

在每个论文/演讲条目之后使用分隔线。

## ⚠️ 常见错误

### ❌ 错误示例

```markdown
**[Paper Title](link)**  <!-- 没有列表项符号 - -->
Name1, Name2.  <!-- 没有缩进 -->
arXiv:xxxx.xxxxx  <!-- 缺少年份 -->
[PDF](/paper.pdf)  <!-- 不会渲染为彩色按钮 -->

---  <!-- 不需要分隔符 -->
```

### ✅ 正确示例

```markdown
- **[Paper Title](https://arxiv.org/abs/xxxx.xxxxx)**
  Name1, **Your Name**, Name3.
  arXiv:xxxx.xxxxx. 2025.
  [abstract](#) [arXiv](https://arxiv.org/abs/xxxx.xxxxx) [code](https://github.com/example)
```

## 🎨 自定义按钮颜色

如果需要添加新的按钮类型或修改颜色，编辑文件：
`src/components/MarkdownContent.tsx`

在 `getLinkButtonClass` 函数中添加新的条件：

```typescript
else if (lowerText === 'your-button-name') {
  return 'bg-[#hex-color] hover:bg-[#hover-color] text-white';
}
```

## 📝 编辑工作流

1. 打开 `content/research.md`（或其他页面）
2. 按照上述格式添加/修改内容
3. 保存文件
4. 刷新浏览器查看效果
5. 调整格式直到满意

---

祝您使用愉快！如有问题，请参考 `content/` 文件夹中的示例内容。
