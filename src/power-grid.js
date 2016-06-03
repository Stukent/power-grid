{
  'use strict';

  const cellSize = 20
  const gridCells = 16
  const gridSize = cellSize * gridCells

  const normalGrid = (width, height)=>{
    return `[data-grid] {position: absolute !important}`;
  }
  
  const grid = (width, height)=>{
    return `[data-grid~="${width}x${height}"] {min-width: ${width * cellSize}px;min-height: ${height * cellSize}px}`;
  }

  const inlineGrid = ()=>{
    return `[data-grid~="inline"] {position: relative !important}`
  }

  const cell = ()=>{ return `[data-pos] { display: inline-block; position: absolute !important; }` }

  const $top = (x)=>{ return `[data-pos~="t${x}"] { top: ${x / gridCells * 100}%; }` }
  const $left = (x)=>{ return `[data-pos~="l${x}"] { left: ${x / gridCells * 100}%; }` }
  const $bottom = (x)=>{ return `[data-pos~="b${x}"] { bottom: ${x / gridCells * 100}%; }` }
  const $right = (x)=>{ return `[data-pos~="r${x}"] { right: ${x / gridCells * 100}%; }` }
  const $width = (x)=>{ return `[data-pos~="w${x}"] { width: ${x / gridCells * 100}%; }` }
  const $height = (x)=>{ return `[data-pos~="h${x}"] { height: ${x / gridCells * 100}%; }` }

  const $Top = (x)=>{ return `[data-pos~="T${x}"] { top: ${x * cellSize}px; }` }
  const $Left = (x)=>{ return `[data-pos~="L${x}"] { left: ${x * cellSize}px; }` }
  const $Bottom = (x)=>{ return `[data-pos~="B${x}"] { bottom: ${x * cellSize}px; }` }
  const $Right = (x)=>{ return `[data-pos~="R${x}"] { right: ${x * cellSize}px; }` }
  const $Width = (x)=>{ return `[data-pos~="W${x}"] { width: ${x * cellSize}px; }` }
  const $Height = (x)=>{ return `[data-pos~="H${x}"] { height: ${x * cellSize}px; }` }

  const $centerX = ()=>{ return `[data-pos~="cx"] { transform: translateX(-50%); }` }
  const $centerY = ()=>{ return `[data-pos~="cy"] { transform: translateY(-50%); }` }
  const $center = ()=>{ return `[data-pos~="cxy"] { transform: translate(-50%,-50%); }` }

  const $tTop = (x,y)=>{
    return `[data-pos~="t${x}T${y}"] { top: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
  }
  const $lLeft = (x,y)=>{
    return `[data-pos~="l${x}L${y}"] { left: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
  }
  const $bBottom = (x,y)=>{
    return `[data-pos~="b${x}B${y}"] { bottom: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
  }
  const $rRight = (x,y)=>{
    return `[data-pos~="r${x}R${y}"] { right: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
  }
  const $wWidth = (x,y)=>{
    return `[data-pos~="w${x}W${y}"] { width: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
  }
  const $hHeight = (x,y)=>{
    return `[data-pos~="h${x}H${y}"] { height: calc(${x / gridCells * 100}% + ${y * cellSize}px); }`
  }

  const $breakColWidth = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}w${y}"] {width: ${y / 16 * 100}%;max-height: none;max-width: none;}}`
  }

  const $breakColHeight = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}h${y}"] {height: ${y / 16 * 100}%;max-height: none;max-width: none;}}`
  }

  const $breakColWidthAbs = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}W${y}"] {width: ${y * cellSize}px;max-height: none;max-width: none;}}`
  }

  const $breakColHeightAbs = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}H${y}"] {height: ${y * cellSize}px;max-height: none;max-width: none;}}`
  }


  const $breakColTop = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}t${y}"] {top: ${y / 16 * 100}%;}}`
  }

  const $breakColLeft = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}l${y}"] {left: ${y / 16 * 100}%;}}`
  }

  const $breakColBottom = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}b${y}"] {bottom: ${y / 16 * 100}%;}}`
  }

  const $breakColRight = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}r${y}"] {right: ${y / 16 * 100}%;}}`
  }

  const $breakColTopAbs = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}T${y}"] {top: ${y * cellSize}px;}}`
  }

  const $breakColLeftAbs = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}L${y}"] {left: ${y * cellSize}px;}}`
  }

  const $breakColBottomAbs = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}B${y}"] {bottom: ${y * cellSize}px;}}`
  }

  const $breakColRightAbs = (col,y)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}R${y}"] {right: ${y * cellSize}px;}}`
  }

  const $breakColHide = (col)=>{
    return `@media (max-width: ${col * gridSize}px) {[data-break~="col${col}hide"] {display: none;}}`
  }

  const $breakColShow = (col)=>{
    return `@media (min-width: ${(col * gridSize)+1}px) {[data-break~="col${col}show"] {display: none;}}`
  }

  const $breakRowWidth = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}w${y}"] {width: ${y / 16 * 100}%;max-height: none;max-width: none;}}`
  }

  const $breakRowHeight = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}h${y}"] {height: ${y / 16 * 100}%;max-height: none;max-width: none;}}`
  }

  const $breakRowWidthAbs = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}W${y}"] {width: ${y * cellSize}px;max-height: none;max-width: none;}}`
  }

  const $breakRowHeightAbs = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}H${y}"] {height: ${y * cellSize}px;max-height: none;max-width: none;}}`
  }

  const $breakRowTop = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}t${y}"] {top: ${y / 16 * 100}%;}}`
  }

  const $breakRowLeft = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}l${y}"] {left: ${y / 16 * 100}%;}}`
  }

  const $breakRowBottom = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}b${y}"] {bottom: ${y / 16 * 100}%;}}`
  }

  const $breakRowRight = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}r${y}"] {right: ${y / 16 * 100}%;}}`
  }

  const $breakRowTopAbs = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}T${y}"] {top: ${y * cellSize}px;}}`
  }

  const $breakRowLeftAbs = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}L${y}"] {left: ${y * cellSize}px;}}`
  }

  const $breakRowBottomAbs = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}B${y}"] {bottom: ${y * cellSize}px;}}`
  }

  const $breakRowRightAbs = (row,y)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}R${y}"] {right: ${y * cellSize}px;}}`
  }

  const $breakRowHide = (row)=>{
    return `@media (max-height: ${row * gridSize}px) {[data-break~="row${row}hide"] {display: none;}}`
  }
  const $breakRowShow = (row)=>{
    return `@media (min-height: ${(row * gridSize)+1}px) {[data-break~="row${row}show"] {display: none;}}`
  }

  let style = []

  style.push(cell())
  style.push(normalGrid())
  style.push($centerX())
  style.push($centerY())
  style.push($center())

  for(let x = 0; x <= gridCells; x++) {
    style.push($top(x))
    style.push($left(x))
    style.push($right(x))
    style.push($bottom(x))
    style.push($width(x))
    style.push($height(x))
    style.push($Top(x))
    style.push($Left(x))
    style.push($Right(x))
    style.push($Bottom(x))
    style.push($Width(x))
    style.push($Height(x))
    for(let y = 0; y <= gridCells; y++) {
      style.push(grid(x,y))
      style.push($tTop(x,y))
      style.push($lLeft(x,y))
      style.push($rRight(x,y))
      style.push($bBottom(x,y))
      style.push($wWidth(x,y))
      style.push($hHeight(x,y))
    }
  }
  for(let i = 10; i >= 0; i--) {
    style.push($breakRowHide(i))
    style.push($breakRowShow(i))
    style.push($breakColHide(i))
    style.push($breakColShow(i))
    for(let x = 0; x <= gridCells; x++) {
      style.push($breakColWidth(i,x))
      style.push($breakColHeight(i,x))
      style.push($breakColTop(i,x))
      style.push($breakColLeft(i,x))
      style.push($breakColBottom(i,x))
      style.push($breakColRight(i,x))
      style.push($breakColTopAbs(i,x))
      style.push($breakColLeftAbs(i,x))
      style.push($breakColBottomAbs(i,x))
      style.push($breakColRightAbs(i,x))
      style.push($breakColWidthAbs(i,x))
      style.push($breakColHeightAbs(i,x))

      style.push($breakRowWidth(i,x))
      style.push($breakRowHeight(i,x))
      style.push($breakRowTop(i,x))
      style.push($breakRowLeft(i,x))
      style.push($breakRowBottom(i,x))
      style.push($breakRowRight(i,x))
      style.push($breakRowTopAbs(i,x))
      style.push($breakRowLeftAbs(i,x))
      style.push($breakRowBottomAbs(i,x))
      style.push($breakRowRightAbs(i,x))
      style.push($breakRowWidthAbs(i,x))
      style.push($breakRowHeightAbs(i,x))
    }
  }

  style.push(inlineGrid())

  const ele = document.createElement('style')
  ele.type = 'text/css'
  ele.appendChild(document.createTextNode(style.join('')))
  document.head.appendChild(ele)
}
