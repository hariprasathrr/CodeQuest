function numIslands(grid) {
  let count = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === "1") {
        count++;
        dfs(grid, row, col);
      }
    }
  }

  return count;
}
function dfs(grid, row, col) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    grid[row][col] === "0"
  ) {
    return;
  }

  grid[row][col] = "0"; // Mark as visited

  dfs(grid, row + 1, col); // Down
  dfs(grid, row - 1, col); // Up
  dfs(grid, row, col + 1); // Right
  dfs(grid, row, col - 1); // Left
}

module.exports = numIslands;
