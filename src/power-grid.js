;((root)=>{
  'use strict';

  const powerGrid = (opts)=>{
    opts = opts || {}
    const cellSize = opts.cellSize || 20
    const gridCells = opts.gridCells || 16
    const colsCount = opts.colsCount || 10 // 3200x3200 is big enough for now
    const gridSize = cellSize * gridCells
    const prefix = opts.prefix || 'data-'

    const stylesheet = ''
    + ((()=>{ // Grid
      let res = `[${prefix}grid] {position: absolute !important}`
      for(let width = 0; width <= gridCells; width++)
        for(let height = 0; height < gridCells; height++)
          res += `[${prefix}grid~="${width}x${height}"] {min-width: ${width * cellSize}px;min-height: ${height * cellSize}px}`
      res += `[${prefix}grid~="inline"] {position: relative !important}`
      return res
    })())
    + ((()=>{ // Pos
      let res = '[${prefix}pos] { display: inline-block; position: absolute !important; }'
      for(let x = 0; x <= gridCells; x++) {
        res += `[${prefix}pos~="t${x}"] { top: ${x / gridCells * 100}%; }`
             + `[${prefix}pos~="l${x}"] { left: ${x / gridCells * 100}%; }`
             + `[${prefix}pos~="b${x}"] { bottom: ${x / gridCells * 100}%; }`
             + `[${prefix}pos~="r${x}"] { right: ${x / gridCells * 100}%; }`
             + `[${prefix}pos~="w${x}"] { width: ${x / gridCells * 100}%; }`
             + `[${prefix}pos~="h${x}"] { height: ${x / gridCells * 100}%; }`
             + `[${prefix}pos~="T${x}"] { top: ${x * cellSize}px; }`
             + `[${prefix}pos~="L${x}"] { left: ${x * cellSize}px; }`
             + `[${prefix}pos~="B${x}"] { bottom: ${x * cellSize}px; }`
             + `[${prefix}pos~="R${x}"] { right: ${x * cellSize}px; }`
             + `[${prefix}pos~="W${x}"] { width: ${x * cellSize}px; }`
             + `[${prefix}pos~="H${x}"] { height: ${x * cellSize}px; }`
        for(let y = 0; y <= gridCells; y++) {
          res += `[${prefix}pos~="t${x}T${y}"] { top: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
               + `[${prefix}pos~="l${x}L${y}"] { left: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
               + `[${prefix}pos~="b${x}B${y}"] { bottom: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
               + `[${prefix}pos~="r${x}R${y}"] { right: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
               + `[${prefix}pos~="w${x}W${y}"] { width: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
               + `[${prefix}pos~="h${x}H${y}"] { height: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
        }
      }
      res += `[${prefix}pos~="cx"] { transform: translateX(-50%); }`
           + `[${prefix}pos~="cy"] { transform: translateY(-50%); }`
           + `[${prefix}pos~="cxy"] { transform: translate(-50%,-50%); }`
      return res
    })())
    + ((()=>{ // Break
      let res = ''
      for(let col = colsCount; col >= 0; col--) {
        res += `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}hide"] {display: none;}}`
             + `@media (min-width: ${(col * gridSize)+1}px) {[${prefix}break~="col${col}show"] {display: none;}}`
             + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}hide"] {display: none;}}`
             + `@media (min-height: ${(col * gridSize)+1}px) {[${prefix}break~="row${col}show"] {display: none;}}`
        for(let y = 0; y <= gridCells; y++) {
          res += `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}w${y}"] {width: ${y / 16 * 100}%;max-height: none;max-width: none;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}h${y}"] {height: ${y / 16 * 100}%;max-height: none;max-width: none;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}W${y}"] {width: ${y * cellSize}px;max-height: none;max-width: none;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}H${y}"] {height: ${y * cellSize}px;max-height: none;max-width: none;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}t${y}"] {top: ${y / 16 * 100}%;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}l${y}"] {left: ${y / 16 * 100}%;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}b${y}"] {bottom: ${y / 16 * 100}%;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}r${y}"] {right: ${y / 16 * 100}%;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}T${y}"] {top: ${y * cellSize}px;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}L${y}"] {left: ${y * cellSize}px;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}B${y}"] {bottom: ${y * cellSize}px;}}`
               + `@media (max-width: ${col * gridSize}px) {[${prefix}break~="col${col}R${y}"] {right: ${y * cellSize}px;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}w${y}"] {width: ${y / 16 * 100}%;max-height: none;max-width: none;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}h${y}"] {height: ${y / 16 * 100}%;max-height: none;max-width: none;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}W${y}"] {width: ${y * cellSize}px;max-height: none;max-width: none;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}H${y}"] {height: ${y * cellSize}px;max-height: none;max-width: none;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}t${y}"] {top: ${y / 16 * 100}%;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}l${y}"] {left: ${y / 16 * 100}%;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}b${y}"] {bottom: ${y / 16 * 100}%;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}r${y}"] {right: ${y / 16 * 100}%;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}T${y}"] {top: ${y * cellSize}px;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}L${y}"] {left: ${y * cellSize}px;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}B${y}"] {bottom: ${y * cellSize}px;}}`
               + `@media (max-height: ${col * gridSize}px) {[${prefix}break~="row${col}R${y}"] {right: ${y * cellSize}px;}}`
        }
      }
      return res
    })())

    const ele = document.createElement('style')
    ele.type = 'text/css'
    ele.appendChild(document.createTextNode(stylesheet))
    document.head.appendChild(ele)
  }

  if (typeof module !== 'undefined' && module.exports)
    module.exports = powerGrid;
  else powerGrid()
})(this);
