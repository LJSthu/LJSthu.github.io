# 🚀 快速开始 - 部署到 GitHub Pages

## 5分钟部署指南

### 步骤 1: 创建 GitHub 仓库

1. 访问 https://github.com/new
2. 仓库名称填写: `yourusername.github.io` （将 `yourusername` 替换为您的 GitHub 用户名）
3. 选择 **Public**（公开）
4. **不要**勾选 "Add a README file"
5. 点击 **Create repository**

### 步骤 2: 推送代码到 GitHub

在项目文件夹中打开终端，依次运行：

```bash
cd academic-portfolio

# 初始化 Git
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 连接到 GitHub（替换为您的用户名）
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# 推送
git branch -M main
git push -u origin main
```

### 步骤 3: 启用 GitHub Pages

1. 访问您的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 左侧菜单点击 **Pages**
4. 在 **Source** 下选择 `GitHub Actions`
5. 完成！

### 步骤 4: 等待部署

- 访问仓库的 **Actions** 标签查看部署进度
- 等待 2-5 分钟
- 部署成功后访问: `https://yourusername.github.io`

---

## 📝 更新内容

每次修改后：

```bash
git add .
git commit -m "Update content"
git push
```

自动重新部署！

---

## 🎯 下一步

现在您可以：

1. **修改个人信息**: 编辑 `src/app/page.tsx`
2. **添加研究内容**: 编辑 `content/research.md`
3. **添加演讲记录**: 编辑 `content/talks.md`
4. **添加教学经历**: 编辑 `content/teaching.md`

详细说明请查看:
- [完整部署指南](./DEPLOY_TO_GITHUB.md)
- [Markdown格式指南](./MARKDOWN_GUIDE.md)
- [使用指南](./HOW_TO_USE.md)

---

需要帮助？查看 [DEPLOY_TO_GITHUB.md](./DEPLOY_TO_GITHUB.md) 获取详细说明和故障排除。
