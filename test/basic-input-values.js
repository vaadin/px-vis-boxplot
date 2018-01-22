document.addEventListener('WebComponentsReady', () => {

  describe('Test basic input values', () => {

    let chart;

    beforeEach((done) => {
      chart = fixture('px-vis-boxplot-fixture');

      Polymer.RenderStatus.afterNextRender(chart, () => {
        setTimeout(() => { // IE11
          done();
        });
      });
    });

    it('One whisker box with outliers', (done) => {
      chart.chartData = generateChartData(1); // eslint-disable-line

      Polymer.RenderStatus.afterNextRender(chart, () => {
        checkBreak();
        done();
      });
    });

    it('Two whisker box with outliers', (done) => {
      chart.chartData = generateChartData(2); // eslint-disable-line

      Polymer.RenderStatus.afterNextRender(chart, () => {
        checkBreak();
        done();
      });
    });
  });
});
