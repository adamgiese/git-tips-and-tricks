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
  </Fragment>
);

export default AliasSlide;
