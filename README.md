# 1. Write your code
# 2. Save changes

git add .
git commit -m "Your message here"
git push origin main  # Pushes your source code to GitHub

# 3. Then deploy
npm run build
npm run deploy  # Pushes built site to gh-pages branch
