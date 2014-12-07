ember build --environment production
cd dist
git init
git add -A
git remote add origin git@github.com:evindor/wallet.git
git commit -m "Generated at $(date)"
git push origin master:gh-pages --force
rm -rf .git
cd ../
