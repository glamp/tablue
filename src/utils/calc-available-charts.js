

export default ({ rows, columns }, data) => {
  let availableCharts = {};
  if (rows.length===0 && columns.length===0) {
    availableCharts['table'] = true;
    availableCharts['summary'] = true;
    availableCharts.best = 'table';
  } else if (rows.length > 0 && columns.length===0) {
    availableCharts['summary'] = true;
    availableCharts['table'] = true;
    availableCharts.best = 'summary';
  } else if (rows.length===0 && columns.length===1) {
    availableCharts['histogram'] = true;
    availableCharts['table'] = true;
    availableCharts['summary'] = true;
    availableCharts['histogram'] = true;
    availableCharts['horizontalBar'] = true;
    availableCharts.best = 'histogram';
  } else if (rows.length===0 && columns.length===2) {
    availableCharts['scatter'] = true;
    availableCharts['line'] = true;
    availableCharts['lineAndScatter'] = true;
    availableCharts['histogram'] = true;
    availableCharts['horizontalBar'] = true;
    availableCharts['table'] = true;
    availableCharts['summary'] = true;
    availableCharts.best = 'scatter';
  } else if (rows.length===0 && columns.length===3) {
    availableCharts['line'] = true;
    availableCharts['scatter'] = true;
    availableCharts['lineAndScatter'] = true;
    availableCharts['histogram'] = true;
    availableCharts['horizontalBar'] = true;
    availableCharts['table'] = true;
    availableCharts['summary'] = true;
    availableCharts.best = 'line';
  } else {
    // eh, just do everything if we can't do something smart
    availableCharts['scatter'] = true;
    availableCharts['lineAndScatter'] = true;
    availableCharts['histogram'] = true;
    availableCharts['horizontalBar'] = true;
    availableCharts['table'] = true;
    availableCharts['summary'] = true;
    availableCharts.best = 'histogram';
  }
  return availableCharts;
}
