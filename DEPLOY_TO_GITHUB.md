# 部署到 GitHub Pages 指南

本指南将帮助您将网站部署到 GitHub Pages，使其可以通过 `https://yourusername.github.io` 访问。

## 📋 前提条件

- GitHub 账号
- Git 已安装在本地
- 项目已在本地运行成功

## 🚀 部署步骤

### 1. 创建 GitHub 仓库

#### 方案 A: 用户/组织主页 (推荐)
创建一个名为 `yourusername.github.io` 的仓库（将 `yourusername` 替换为您的 GitHub 用户名）

- 访问地址将是: `https://yourusername.github.io`
- 无需设置 basePath

#### 方案 B: 项目页面
创建任意名称的仓库，例如 `academic-portfolio`

- 访问地址将是: `https://yourusername.github.io/academic-portfolio`
- 需要设置 basePath（见下文）

### 2. 配置仓库（如果选择方案 B）

如果您使用项目页面（方案 B），需要在仓库根目录创建 `.env.local` 文件：

```bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name
```

将 `your-repo-name` 替换为您的仓库名称。

**如果使用方案 A（用户主页），跳过此步骤。**

### 3. 初始化 Git 仓库

在项目目录中打开终端，运行：

```bash
cd academic-portfolio

# 初始化 git（如果还未初始化）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Academic portfolio website"
```

### 4. 连接到 GitHub 仓库

将您的本地仓库连接到 GitHub：

```bash
# 替换为您的 GitHub 仓库地址
git remote add origin https://github.com/yourusername/your-repo-name.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 5. 启用 GitHub Pages

1. 访问您的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**
4. 在 **Build and deployment** 部分：
   - **Source**: 选择 `GitHub Actions`
5. 保存设置

### 6. 自动部署

现在，每次您推送代码到 `main` 分支，GitHub Actions 会自动：
1. 使用生产配置构建您的网站
2. 部署到 GitHub Pages

您可以在仓库的 **Actions** 标签页查看部署进度。

**注意**: 项目包含两个配置文件：
- `next.config.js` - 用于本地开发
- `next.config.production.js` - 用于GitHub Pages部署（自动使用）

### 7. 访问网站

部署完成后（通常需要 2-5 分钟），您可以访问：

- **方案 A**: `https://yourusername.github.io`
- **方案 B**: `https://yourusename.github.io/your-repo-name`

## 🔄 更新网站内容

每次修改内容后：

```bash
# 添加更改
git add .

# 提交
git commit -m "Update content"

# 推送到 GitHub
git push
```

GitHub Actions 会自动重新部署您的网站。

## 📝 常见问题

### Q: 部署后页面显示 404

**解决方案**:
1. 检查 GitHub Pages 设置是否正确
2. 确认 GitHub Actions 部署成功（查看 Actions 标签页）
3. 如果使用项目页面，确认设置了正确的 `basePath`
4. 等待几分钟，GitHub Pages 需要时间生效

### Q: 样式或图片无法加载

**解决方案**:
1. 如果使用项目页面（方案 B），确保设置了 `NEXT_PUBLIC_BASE_PATH`
2. 检查 `next.config.js` 中的 `basePath` 配置
3. 确保所有资源使用相对路径

### Q: 如何使用自定义域名？

1. 在仓库的 **Settings** > **Pages** > **Custom domain** 中添加您的域名
2. 在域名提供商处设置 DNS：
   - 添加 CNAME 记录指向 `yourusername.github.io`
   - 或添加 A 记录指向 GitHub Pages 的 IP 地址
3. 等待 DNS 生效（可能需要 24-48 小时）

### Q: 构建失败怎么办？

1. 查看 GitHub Actions 的错误日志
2. 确保本地可以成功运行 `bun run build`
3. 检查 `package.json` 中的依赖是否正确
4. 确认 `.github/workflows/deploy.yml` 文件正确

## 🛠️ 手动部署（备选方案）

如果 GitHub Actions 不可用，可以手动部署：

```bash
# 本地构建
bun run build

# 安装 gh-pages 包
bun add -D gh-pages

# 添加部署脚本到 package.json
# "deploy": "gh-pages -d out"

# 部署
bun run deploy
```

## 📊 检查部署状态

1. 访问仓库的 **Actions** 标签页
2. 查看最新的工作流运行
3. 绿色勾号 ✅ = 部署成功
4. 红色叉号 ❌ = 部署失败，点击查看详情

## 🎯 最佳实践

1. **提交前测试**: 在本地运行 `bun run build` 确保构建成功
2. **有意义的提交信息**: 使用清晰的提交信息，如 "Add new research paper" 或 "Update teaching content"
3. **定期备份**: GitHub 已经是您的备份，但建议同时保存本地副本
4. **使用分支**: 对于大改动，创建新分支测试后再合并到 main

## 📧 需要帮助？

如果遇到问题：
1. 查看 GitHub Actions 的构建日志
2. 检查本指南的常见问题部分
3. 访问 [GitHub Pages 文档](https://docs.github.com/en/pages)

---

## 🎉 快速命令参考

```bash
# 初始设置
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-repo-name.git
git push -u origin main

# 日常更新
git add .
git commit -m "Your commit message"
git push

# 查看状态
git status

# 查看历史
git log --oneline
```

祝您部署顺利！🚀
