    <div class="demo">
      <div class="demo-wrapper">
        <button id="async-msg-demo-toggle" class="js-container-target demo-toggle-button">Asynchronous messages
          <div class="demo-meta u-avoid-clicks">Supports: Win, OS X, Linux <span class="demo-meta-divider">|</span> Process: Both</div>
        </button>
        <div class="demo-box">
          <div class="demo-controls">
            <button class="demo-button" id="async-msg">Ping</button>
            <span class="demo-response" id="async-reply"></span>
          </div>
          <p>Using <code>ipc</code> to send messages between processes asynchronously is the preferred method since it will return when finished without blocking other operations in the same process.

          <p>This example sends a "ping" from this process (renderer) to the main process. The main process then replies with "pong".</p>
          <h5>Renderer Process</h5>
          <pre><code data-path="renderer-process/communication/async-msg.js"></pre></code>
          <h5>Main Process</h5>
          <pre><code data-path="main-process/communication/async-msg.js"></code></pre>
        </div>
      </div>
    </div>