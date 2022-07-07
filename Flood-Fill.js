      var M = 8;
      var N = 8;
      function flood(screen, x, y, prevC, newC)
      {
        if (x < 0 || x >= M || y < 0 || y >= N) return;
        if (screen[x][y] != prevC) return;
        screen[x][y] = newC;
        flood(screen, x + 1, y, prevC, newC);
        flood(screen, x - 1, y, prevC, newC);
        flood(screen, x, y + 1, prevC, newC);
        flood(screen, x, y - 1, prevC, newC);
      }

      function floodFill(screen, x, y, newC) {
        var prevC = screen[x][y];
        if (prevC == newC) return;
        flood(screen, x, y, prevC, newC);
      }
      var screen = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0],
        [1, 0, 0, 1, 1, 0, 1, 1],
        [1, 2, 2, 2, 2, 0, 1, 0],
        [1, 1, 1, 2, 2, 0, 1, 0],
        [1, 1, 1, 2, 2, 2, 2, 0],
        [1, 1, 1, 1, 1, 2, 1, 1],
        [1, 1, 1, 1, 1, 2, 2, 1],
      ];
      var x = 4,
        y = 4,
        newC = 3;
      floodFill(screen, x, y, newC);
      document.write("after " + "call to floodFill: ");
      for (var i = 0; i < M; i++) {
        for (var j = 0; j < N; j++) document.write(screen[i][j] + " ");
        document.write("");
      }
