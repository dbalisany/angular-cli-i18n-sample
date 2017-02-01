import { Component } from '@angular/core';

/**
 * A sample component with localized messages
 */
@Component({
  selector: 'localized-component',
  template: `
    <span i18n="localized.component.hello|A hello world message for the localized component">Hello!</span>
    <span i18n="localized.component.goodbye|A goodbye message for the localized component">Good bye!</span>
  `
})
export class LocalizedComponent { }

