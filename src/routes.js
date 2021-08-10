// dashboards

import Dashboard1 from './components/Dashboard1'
import dashboard2 from './components/dashboard2'
import layout from './components/layout'
import metrics from './components/metrics'
import widgets from './components/widgets'
import grid_option from './components/grid_option'

// graphs
import flot_chart from './components/graphs/flot_chart'
import c3_chart from "./components/graphs/c3_chart";
import chartjs from "./components/graphs/chartjs";
import chartlist from "./components/graphs/chartlist";
import morris from "./components/graphs/morris";
import peity from "./components/graphs/peity";
import rickshaw_chart from "./components/graphs/rickshaw_chart";
import sparkline from "./components/graphs/sparkline";

// mailsbox
import email_compose from './components/mailbox/email_compose'
import email_templates from "./components/mailbox/email_templates";
import email_view from "./components/mailbox/email_view";
import inbox from "./components/mailbox/inbox";


// forms
import basic_form from "./components/forms/basic_form";
import file_upload from "./components/forms/file_upload";
import form_advance from "./components/forms/form_advance";
import form_autocomplete from "./components/forms/form_autocomplete";
import form_wazard from "./components/forms/form_wazard";
import mark_down from "./components/forms/mark_down";
import text_editor from "./components/forms/text_editor";


//graphs


import bootstrap_caroursel from "./components/gallery/bootstrap_carousel";
import lightbox from './components/gallery/lightbox'
import slick from "./components/gallery/slick";
 


//tables

import datatable from './components/tables/datatable'
import footable from "./components/tables/footable";
import statictable from "./components/tables/statictable";
import jqgrid from "./components/tables/jqgrid";

//other pages

import _404 from './components/other-pages/_404'
import _500 from "./components/other-pages/_500";
import empty from "./components/other-pages/empty";
import forgetpassword from "./components/other-pages/forgetpassword";
import invoice from "./components/other-pages/invoice";
import locked_screen from "./components/other-pages/locked_screen";
import login from "./components/other-pages/login";
import login2 from "./components/other-pages/login2";
import register from "./components/other-pages/register";
import search_result from "./components/other-pages/search_result";








export default [
  { path: "/", component: Dashboard1 },
  { path: "/dash2", component: dashboard2 },

  { path: "/layout", component: layout },
  { path: "/metrics", component: metrics },
  { path: "/widgets", component: widgets },
  { path: "/grid_option", component: grid_option },

  //   graphs

  { path: "/flotchart", component: flot_chart },
  { path: "/c3_chart", component: c3_chart },
  { path: "/chartjs", component: chartjs },
  { path: "/chartlist", component: chartlist },
  { path: "/morris", component: morris },
  { path: "/peity", component: peity },
  { path: "/rickshaw", component: rickshaw_chart },
  { path: "/sparkline", component: sparkline },

  // mailbox
  { path: "/emailcompose", component: email_compose },
  { path: "/emailtemplates", component: email_templates },
  { path: "/emailview", component: email_view },
  { path: "/inbox", component: inbox },

  //forms

  { path: "/basicform", component: basic_form },
  { path: "/fileupload", component: file_upload },
  { path: "/formadvance", component: form_advance },
  { path: "/formautocomplete", component: form_autocomplete },
  { path: "/formwazard", component: form_wazard },
  { path: "/markdown", component: mark_down },
  { path: "/texteditor", component: text_editor },

  //gallery

  { path: "/carousel", component: bootstrap_caroursel },
  { path: "/lightbox", component: lightbox },
  { path: "/slick", component: slick },

  //tables

  { path: "/datatable", component: datatable },
  { path: "/footable", component: footable },
  { path: "/jqgrid", component: jqgrid },
  { path: "/statictable", component: statictable },

  //other_pages
  { path: "/404", component: _404 },
  { path: "/505", component: _500 },
  { path: "/empty", component: empty },
  { path: "/forgetpassword", component: forgetpassword},
  { path: "/invoice", component: invoice },
  { path: "/lockedscreen", component: locked_screen },
  { path: "/login", component: login },
  { path: "/login2", component: login2 },
  { path: "/register", component: register },
  { path: "/searchresult", component: search_result },
];



