import * as React from 'react';


/**
 *
 * @param props
 * @constructor
 */
export default function HomePage(): JSX.Element {
  return (
    <main>
      <h1 className='visually-hidden'>Welcome to the portfolio site for Phil Gibbins</h1>
      <section className='page-section'>
        <div>
          <h2>Hi. I'm Phil. A great web developer that <em>you'd want to go to the pub with</em>.</h2>
          <p>Yeah sure, I build websites for a living, specialising in Front End technologies. Yes, I try and do a great job, like many other developers. But it's not all about the work is it.</p>
          <p>Work is 7-8 hours of the day, 5 days a week. You need to be able to get on with that guy for that amount of time. So yes, look through my work. But here you can also find out about me, Phil, as a person.</p>
          <ul>
            <li><abbr title='hashtag'>#</abbr>accessibility</li>
            <li><abbr title='hashtag'>#</abbr>javascript</li>
            <li><abbr title='hashtag'>#</abbr>es2015+</li>
            <li><abbr title='hashtag'>#</abbr>typescript</li>
            <li><abbr title='hashtag'>#</abbr>react</li>
            <li><abbr title='hashtag'>#</abbr>redux</li>
            <li><abbr title='hashtag'>#</abbr>angular5</li>
            <li><abbr title='hashtag'>#</abbr>html5</li>
            <li><abbr title='hashtag'>#</abbr>css3</li>
            <li><abbr title='hashtag'>#</abbr>sass</li>
            <li><abbr title='hashtag'>#</abbr>docker</li>
            <li><abbr title='hashtag'>#</abbr>ci</li>
            <li><abbr title='hashtag'>#</abbr>universalJavascript</li>
            <li><abbr title='hashtag'>#</abbr>jackOfAllTrades</li>
          </ul>
        </div>
      </section>
      <section className='page-section'>
        <div>
          <h2>I don't design things, <em>I build things</em>.</h2>
          <p>I'm not a designer. And I don't claim to be. That's not what I am good at. What I am good at is:</p>
          <ul>
            <li>Building a responsive, mobile-first website</li>
            <li>Building a semantic website</li>
            <li>Building a website, just as you want it to look</li>
            <li>Building a website with beautiful simplistic animations</li>
            <li>Building interactive enhancements with JavaScript</li>
            <li>Building with JavaScript frameworks</li>
            <li>Building for performance</li>
          </ul>
        </div>
      </section>
      <section className='page-section'>
        <div>
          <h2>Everyone needs help, <em>even web developers</em>.</h2>
          <p>No-one can do everything, especially by themselves. When I started out (as I'm sure) many web developers do, I was determined to be the best, and write everything myself. Of course, I was naive.</p>
          <p>I've needed help every day of my career in some way or another, whether it be face-to-face, a course, documentation or reading blogs and forums, and it would be foolish to pretend that wasn't true.</p>
          <p>Here are some of the many tools I have and will continue to use along the way:</p>
          <ul>
            <li>Stack Overflow</li>
            <li>Google</li>
            <li>CSS tricks</li>
          </ul>
        </div>
      </section>
      <section className='page-section'>
        <div>
          <h2>I'm not the youngest developer, <em>but I have experience</em>.</h2>
          <p>I've had multiple jobs and positions throughout my career, showing both loyalty to a company and the initiative to move on when it's not benefitting my personal development any more.</p>
          <p>Here are some companies I have worked for in my time:</p>
          <p>And here are some websites I have worked on:</p>
        </div>
      </section>
      <section className='page-section'>
        <div>
          <h2>I don't know everything, but here are some <em>things I have built with the things I do know</em></h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <p>See more personal projects on Github</p>
        </div>
      </section>
      <section className='page-section'>
        <div>
          <h2>If you like what you see so far, <em>get to know me better</em>.</h2>
          <p>You can find me on social media</p>
          <ul>
            <li>I don't often go on facebook other than to view notifications, but you'll ocassionally find an odd funny post I've re-shared.</li>
            <li>You'll find if I'm using twitter i'll post all the time, and if I'm not using twitter, I'll go months without a peep.</li>
          </ul>
        </div>
      </section>
      <section className='page-section'>
        <div>
          <h2>If you like what you see so far, <em>get in touch</em></h2>
          <form>
            <div>
              <label htmlFor=''></label>
              <input type='text' />
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
