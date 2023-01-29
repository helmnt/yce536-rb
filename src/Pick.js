import React from 'react';

export default function Pick() {
  return (
    <div class="pick pick-green">
      <div className="card">
        <header class="card-header">
          <p class="card-header-title">
            Buy INTC @3400.00 Sell @4500.00 <br />
            StopLoss @ 10%
          </p>
          <div class="card-header-icon">
            <span class="icon">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </header>
        <div class="card-content">
          <div class="content">
            <p>&nbsp; ...</p>

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
  );
}
