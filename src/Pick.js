import React from 'react';

export default function Pick() {
  return (
    <div>
      <div class="column is-4-tablet is-3-desktop">
        <div class="card is-centered">
          <header class="card-header">
            <p class="card-header-title">
              Buy QQQ @3400.00 Sell @4500.00 StopLoss @ 10%
            </p>
            <div class="card-header-icon">
              <span class="icon">
                <i class="fas fa-user"></i>
              </span>
            </div>
          </header>
          <div class="card-content">
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </p>

              <nav class="level is-mobile">
                <a class="level-item" aria-label="share">
                  <p class="">@johnsmith</p>
                </a>
                <a class="level-item" aria-label="share">
                  <p class="">$4900</p>
                </a>
                <a class="level-item" aria-label="share">
                  <p class="">^4.29%</p>
                </a>
              </nav>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">
              <i class="fas fa-bookmark"></i>
            </a>
            <a href="#" class="card-footer-item">
              <i class="fas fa-share"></i>
            </a>
            <a href="#" class="card-footer-item">
              <i class="fas fa-ellipsis-h"></i>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
