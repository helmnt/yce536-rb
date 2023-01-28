import React from 'react';

export default function BottomInputBar() {
  return (
    <div class="section">
      <form action="">
        <div class="navbar is-transparent is-fixed-bottom px-2">
          <div class="block mt-2">
            <div class="field has-addons">
              <span class="control">
                <button class="button is-primary fas fa-plus"></button>
              </span>
              <span class="control is-expanded">
                <input type="text" class="input" placeholder="Enter Text" />
              </span>
              <span class="control">
                <button class="button is-primary fas fa-search"></button>
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
