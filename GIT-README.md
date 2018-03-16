# Git Fork and Pull Request Workflow

https://gist.github.com/Chaser324/ce0505fbed06b947d962
https://github.com/susam/gitpr

# CREATE PULL REQUEST

## Fork upstream and clone your fork

```
git clone https://GITHUB/USER/REPO.git
cd REPO
git remote add upstream https://GITHUB/UPSTREAM-OWNER/REPO.git
git remote -v
```

# Work on pull request in a new topic branch

```
git checkout -b TOPIC-BRANCH
git add .
git commit –m "My new feature commit"  
git push –-set-upstream origin TOPIC-BRANCH
git push origin TOPIC-BRANCH
```
