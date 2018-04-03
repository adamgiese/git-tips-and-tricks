/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import Code from 'Utils/Code.jsx';
import Comment from 'Utils/Comment.jsx';
import alias from './alias.png';
/* eslint-ensable no-unused-vars */

const AliasSlide = () => (
  <Fragment>
    <section>
      <img styles="margin-top: 1rem; display: block;" src={alias} width="250" />
      <h2>useful aliases</h2>
    </section>

    <section>
      <h3>Writing aliases</h3>
      <Code caption={'Aliasing from the command line'}>
        $ git config --global alias.last 'log -1 HEAD'
      </Code>
      <Code>
        $ vim ~/.gitconfig # vim > everything else
      </Code>
      <Code caption={'Aliasing from the editor'}>
      [alias]<br />
        &nbsp;&nbsp;&nbsp;&nbsp;graph = log --graph --oneline --all --decorate<br />
        &nbsp;&nbsp;&nbsp;&nbsp;today = log --oneline --since=6am --author='Adam Giese' --all<br />
        &nbsp;&nbsp;&nbsp;&nbsp;scratch = !vim `git rev-parse --show-toplevel`/.scratchpad<br />
      </Code>
    </section>

    <section>
      <Code
        caption={`Shorthands.
        Warning: May make working on another machine a living hell.
      `}>
        $ git co <Comment>checkout</Comment> <br />
        $ git c <Comment>commit</Comment> <br />
        $ git push <Comment>push</Comment> <br />
      </Code>
    </section>

    <section>
      <Code caption={'General git niceties'}>
        $ git create-branch <Comment>checkout -b</Comment><br />
        $ git delete-branch <Comment>checkout -D</Comment><br />
        $ git remotes <Comment>remote -v</Comment><br />
        $ git stashes <Comment>stash list</Comment><br />
        $ git branches <Comment>branch -a</Comment><br />
      </Code>
    </section>

    <section>
      <Code caption={'Fix typos'}>
        $ git grpe <Comment>git grep</Comment> <br />
        $ git grp <Comment>git grep</Comment> <br />
        $ git checkoiut <Comment>git checkout</Comment> <br />
      </Code>
    </section>

    <section>
      <Code caption={'Alias your log preferences'}>
        $ git graph <Comment>log --graph --oneline --all --decorate</Comment> <br />
        $ git today <Comment>log --oneline --since=4am --author='Adam Giese' --all</Comment><br />
        $ git last <Comment>log -1 HEAD</Comment><br />
        $ git filehistory <Comment>log -p --follow -- </Comment>
      </Code>
    </section>

    <section>
      <Code caption={'Aliases for navigation'}>
        $ git here <Comment>rev-parse --show-prefix</Comment><br />
        $ git home <Comment>rev-parse --show-toplevel</Comment><br />
        $ cd `git home` <Comment>navigates to root of repo</Comment>
      </Code>
    </section>

    <section>
      <Code caption={'Aliases for commiting'}>
        $ git oops <Comment>commit --amend --no-edit --date="now"</Comment><br />
        $ git commit-all <Comment>!git add --all && git commit</Comment><br />
        $ git pop-commit <Comment> reset --soft HEAD</Comment><br />
        $ git combine-commits <Comment>!git pop-commit && git oops</Comment>
      </Code>
    </section>

    <section>
      <Code caption={'Toggling configs'}>
        $ git work <Comment>config user.email "adam.giese@underarmour.com"</Comment><br />
        $ git personal <Comment>config user.email "adam.giese@gmail.com"</Comment><br />
      </Code>
    </section>

    <section>
      <Code caption={'Cleaning up'}>
        $ git undo-changes <Comment>reset --hard </Comment><br />
        $ git force-clean <Comment>clean -fd</Comment><br />
        $ git clean-all <Comment>!git force-clean && git undo-changes</Comment>
      </Code>
    </section>

    <section>
      <Code caption={'Common patterns'}>
        $ git unsnap <Comment>checkout -- '**/*.snap'</Comment><br />
        $ git todos <Comment>git grep -i todo -- ':/'</Comment><br />
      </Code>
    </section>

    <section>
      <Code caption={'Aliases about aliases.'}>
        $ git aliases <Comment>config --get-regexp alias</Comment><br />
      </Code>
    </section>

    <section>
      <h3>Advanced Aliases</h3>
    </section>

    <section>
      <p>If you want more than a single line, you can add custom functions by adding a file named <code>git-COMMAND</code> to your $PATH</p>
    </section>

    <section>
      <Code caption='git-curses'>
        count_grep() &#123; git log --oneline --grep "$1" -i --no-merges | wc -l &#125;<br />
        <br />
        echo "# Instances of Curse Words in Commit Logs"<br />
        echo "Fuck:   $(count_grep fuck)"<br />
        echo "Shit:   $(count_grep shit)"<br />
        echo "Hell:   $(count_grep ' hell ')"<br />
        echo "Ass:    $(count_grep ' ass ')"<br />
        echo "Damn:   $(count_grep damn)"<br />
        echo "Dammit: $(count_grep dammit)"<br />
      </Code>
      <Code>$ git curses </Code>
    </section>
  </Fragment>
);

export default AliasSlide;
