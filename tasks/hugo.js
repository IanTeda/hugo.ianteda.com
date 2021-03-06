/**
 * Gulp Jekyll Task
 * @param {gulp} gulp - The gulp module passed in
 * @param {config} config - The projects Gulp config file
 * @param {argv} argv - Arguments flagged at the CLI
 * @param {$} $ - Lazy load plugins, save the imports at the start of the file
 * @return {task} Scripts - Task to manage Jekyll in project
 */

module.exports = (gulp, config, argv, $) => {
  return (callback) => {
    $.shelljs.exec(
      'hugo server --buildDrafts --buildExpired --buildFuture --cleanDestinationDir --disableFastRender'
    );
    callback();
  };
};
