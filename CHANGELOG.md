# Changes to Vash adapter

## next

* Feature: add support for Vash helpers.
* Upgrade `vash` to v0.12.6. Contains mostly minor fixes to template parsing.
  
  One potential issue is compatibility with the deprecated syntax of more than one `@`, like `@if (@Model.foo) {}`. Vash is supposed to be backward-compatible, but users are advised to use Vash's recommended syntax instead (only starting `@`, like `@if (Model.foo) {}`).
