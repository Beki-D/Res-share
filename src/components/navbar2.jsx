import React from 'react';

export default function navbar2() {
  return (
      <div>
         <nav class="_1yfus1e" className="fixed top-40 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" data-test-id="side-nav" aria-label="user profile navigation">
          <section class="_1ozlbq6"><h2 class="_18undph9">My stuff</h2>
          <ul>
            <li>
              <a data-test-id="side-nav-courses" class="_158ir6wt" href="/profile/me/courses">
              <span class="_g20yn58">Courses</span></a>
              </li>
              </ul>
              </section>
              <section class="_1ozlbq6">
                <h2 class="_18undph9">My account</h2>
                <ul>
                  <li>
                    <a data-test-id="side-nav-progress" class="_8ry3zep" href="/profile/me/progress">
                      <span class="_xy39ea8">Progress</span>
                      </a></li>
                      <li>
                        <a data-test-id="side-nav-profile" class="_8ry3zep" href="/profile/me/">
                          <span class="_xy39ea8">Profile</span></a></li><li><a data-test-id="side-nav-teachers" class="_8ry3zep" href="/profile/me/teachers">
                            <span class="_xy39ea8">Teachers</span></a></li></ul>
                            </section></nav>
      </div>
    )
  }
