import * as React from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import AboutPage from './pages/about';
import ArticlesListPage from './pages/blog/list';
import HomePage from './pages/home';
import PortfolioLandingPage from './pages/portfolio';


/**
 *
 * @constructor
 */
export default function Routes() {
  return (
    <Switch>
      <Route path='/' render={ () => <DefaultLayout><HomePage /></DefaultLayout> } />
      <Route path='/portfolio' render={ () => <DefaultLayout><PortfolioLandingPage /></DefaultLayout> } />
      <Route path='/blog' render={ () => <DefaultLayout><ArticlesListPage /></DefaultLayout> } />
      <Route path='/about' render={ () => <DefaultLayout><AboutPage /></DefaultLayout> } />
      <Redirect to='/' />
    </Switch>
  );
}

/**
 *
 * @constructor
 */
function DefaultLayout(props: { children: JSX.Element }): JSX.Element {
  return (
    <>
      <Header />
      { props.children }
      <Footer />
    </>
  );
}

/**
 *
 * @constructor
 */
function Header(): JSX.Element {
  return (
    <header className='global-header'>
      <nav>
        <MainNavigationLinks />
      </nav>
    </header>
  );
}

/**
 *
 * @constructor
 */
function MainNavigationLinks(): JSX.Element {
  return (
    <ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/portfolio'>Portfolio</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/about'>About</Link></li>
      {/*<li><Link to='/'>Book</Link></li>*/}
    </ul>
  );
}

/**
 *
 * @constructor
 */
function Footer(): JSX.Element {
  return (
    <footer className='global-footer'>
      <section>
        <h2 className='visually-hidden'>Pages on this site</h2>
        <MainNavigationLinks />
      </section>
      <section>
        <h2>Professional networks</h2>
        <ul>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://www.linkedin.com/in/phil-gibbins-91467566/' rel='external' target='_blank'>LinkedIn</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a
              href='https://stackoverflow.com/users/6189078/phil-gibbins?tab=profile'
              rel='external'
              target='_blank'
            >
              Stack Overflow
            </a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://github.com/scoobster17' rel='external' target='_blank'>GitHub</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://gitlab.com/scoobster17' rel='external' target='_blank'>GitLab</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://bitbucket.org/scoobster17/' rel='external' target='_blank'>BitBucket</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://hub.docker.com/u/scoobster17' rel='external' target='_blank'>Docker Hub</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Hosted projects</h2>
        <ul>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' project </span>
            <a href='https://tails.scoobster17.com' rel='external' target='_blank'>Tails</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' project </span>
            <a href='https://bodge.scoobster17.com' rel='external' target='_blank'>Bodge</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' project </span>
            <a href='https://arcade.scoobster17.com' rel='external' target='_blank'>Arcade</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' project </span>
            <a href='https://hawk.scoobster17.com' rel='external' target='_blank'>Hawk</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' project </span>
            <a href='https://cor.scoobster17.com' rel='external' target='_blank'>Cor</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' project </span>
            <a href='https://pole.scoobster17.com' rel='external' target='_blank'>Pole</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' project </span>
            <a href='https://muppet.scoobster17.com' rel='external' target='_blank'>Muppet</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' project </span>
            <a href='https://meels.scoobster17.com' rel='external' target='_blank'>Meels</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Training Websites</h2>
        <ul>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://www.codewars.com/users/scoobster17' rel='external' target='_blank'>Codewars</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://www.codecademy.com/scoobster17' rel='external' target='_blank'>Codecademy</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Social media</h2>
        <ul>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://twitter.com/scoobster17' rel='external' target='_blank'>Twitter</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://www.facebook.com/scoobster17' rel='external' target='_blank'>Facebook</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://www.pinterest.com/scoobster17/' rel='external' target='_blank'>Pinterest</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://www.youtube.com/channel/UCA83qL5kj0yk0lxmyrO4eKw' rel='external' target='_blank'>
              YouTube
            </a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' profile on </span>
            <a href='https://plus.google.com/105643303929525756147' rel='external' target='_blank'>Google+</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' old blog on </span>
            <a
              href='https://www.blogger.com/profile/07880705817398363520'
              rel='external'
              target='_blank'
            >
              Blogger
            </a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' old blog on </span>
            <a href='https://scoobster17.wordpress.com/' rel='external' target='_blank'>Wordpress</a>
          </li>
        </ul>
      </section>
      <section>
        <h2>Miscellaneous links</h2>
        <ul>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' github.io page</span>
            <a href='https://scoobster17.github.io/' rel='external' target='_blank'>scoobster17.github.io</a>
          </li>
          <li>
            <span className='visually-hidden'>See Phil Gibbins' Wedding Website</span>
            <a href='https://philandsteph.co.uk' rel='external' target='_blank'>philandsteph.co.uk</a>
          </li>
        </ul>
      </section>
    </footer>
  );
}
