AjaxFlow
========

Make faster ajax calls in WordPress with this plugin.
You could also remove the plugin header and use this class as an extention to your own project.

Traditionall ajax call in WordPress:
http://yourdomain.com/wp-admin/admin-ajax?action=my_hook

With AjaxFlow:
http://yourdomain.com/ajaxflow/my_hook


If you need really fast load for ajax you could attach the shortinit parameter to the call:
http://yourdomain.com/ajaxflow/my_hook?shortinit=true
Then WordPress won't load ordinary components as themes and plugins. If you need those in your call, you have two options:

1. Use the "ajaxflow_shortinit_load" event/action to load any component.
2. Don't use the shortinit parameter.

To check performance differences with these three ways of calling WordPress ajax, take a look at:
http://ajaxcall.flowcom.se or install the theme yourself from https://github.com/EkAndreas/ajaxflow-test

If you don't like the tag ajaxflow inside your ajax call URL, please consider change this in the DEFINE added in the constructor of the ajaxflow class.
