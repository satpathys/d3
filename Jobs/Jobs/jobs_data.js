var taskArray=[{job_name:"createParametersJob",
  parent_job_names:"",
  expected_start_PST:"0:10",expected_end_PST:"0:10"},
  {job_name:"improvedDimFetcherWrapperJob",parent_job_names:""

  ,expected_start_PST:"0:15",expected_end_PST:"0:15"},
  {job_name:"DapRetailBudgetMetricsFetcherWrapperJob",parent_job_names:""

  ,expected_start_PST:"1:00",expected_end_PST:"1:07"},
  {job_name:"dapMediaTacticsFetcherJob",parent_job_names:""

  ,expected_start_PST:"1:00",expected_end_PST:"1:00"},
  {job_name:"DapCreativesMetricsMultithreadedFetcherWorkUnit",parent_job_names:""

  ,expected_start_PST:"1:10",expected_end_PST:"2:58"},
  {job_name:"DapAdGroupsMetricsFetcherWorkUnit",parent_job_names:""

  ,expected_start_PST:"1:10",expected_end_PST:"2:22"},
  {job_name:"DapKeywordMetricsMultithreadedFetcherWorkUnit",parent_job_names:""

  ,expected_start_PST:"1:10",expected_end_PST:"2:57"},
  {job_name:"DapCampaignMetricsMultithreadedFetcherWorkUnit",parent_job_names:""

  ,expected_start_PST:"1:10",expected_end_PST:"2:44"},
  {job_name:"DapRetailSpendMetricsFetcherWrapperJob",parent_job_names:""

  ,expected_start_PST:"2:15",expected_end_PST:"2:16"},
  {job_name:"cacheJob.intent_audience_size",parent_job_names:""

  ,expected_start_PST:"7:10",expected_end_PST:"7:30"},
  {job_name:"cacheJob.intent_experience",parent_job_names:""

  ,expected_start_PST:"7:30",expected_end_PST:"7:50"},
  {job_name:"eis-dimensions",parent_job_names:""

  ,expected_start_PST:"2:05",expected_end_PST:"2:10"},
  {job_name:"hdfs_cleanup_out_of_retain_period_directories",parent_job_names:""

  ,expected_start_PST:"22:00",expected_end_PST:"22:03"},
  {job_name:"lot-management-curation",parent_job_names:"lot-management-curation"

  ,expected_start_PST:"19:05",expected_end_PST:"19:11"},
  {job_name:"manheim-sales-curation",parent_job_names:""

  ,expected_start_PST:"19:05",expected_end_PST:"19:11"},
  {job_name:"manheim-sales-distribution",parent_job_names:"manheim-sales-curation"

  ,expected_start_PST:"19:30",expected_end_PST:"19:31"},
  {job_name:"mds-vehicledetailing-sales-curation",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"mds-vehicledetailing-sales-distribution",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"ow_acq_audit_impression",parent_job_names:"ow_acq_impression_residual"

  ,expected_start_PST:"0:18",expected_end_PST:"0:18"},
  {job_name:"ow_acq_impression_residual",parent_job_names:""

  ,expected_start_PST:"0:15",expected_end_PST:"0:17"},
  {job_name:"ow_acquire_raw_phone_leads",parent_job_names:""

  ,expected_start_PST:"1:05",expected_end_PST:"1:09"},
  {job_name:"ow_adm_creatives",parent_job_names:""

  ,expected_start_PST:"0:05",expected_end_PST:"0:06"},
  {job_name:"ow_adm_displayad_logs",parent_job_names:""

  ,expected_start_PST:"0:05",expected_end_PST:"0:06"},
  {job_name:"ow_adm_impression_metrics",parent_job_names:""

  ,expected_start_PST:"2:12",expected_end_PST:"2:12"},
  {job_name:"ow_adm_invgroups",parent_job_names:""

  ,expected_start_PST:"0:05",expected_end_PST:"0:05"},
  {job_name:"ow_adm_placements",parent_job_names:""

  ,expected_start_PST:"0:05",expected_end_PST:"0:05"},
  {job_name:"ow_adm_torque_impressions",parent_job_names:""

  ,expected_start_PST:"17:05",expected_end_PST:"17:05"},
  {job_name:"ow_admission_create_table_partition",parent_job_names:""

  ,expected_start_PST:"0:12",expected_end_PST:"0:12"},
  {job_name:"ow_admission_displayadlog_parser",parent_job_names:""

  ,expected_start_PST:"1:35",expected_end_PST:"1:36"},
  {job_name:"ow_admission_impression_processing",parent_job_names:"ow_admission_displayadlog_parser"

  ,expected_start_PST:"2:40",expected_end_PST:"3:14"},
  {job_name:"ow_advertising_csvtojson",parent_job_names:"ow_admission_impression_processing"

  ,expected_start_PST:"3:30",expected_end_PST:"3:35"},
  {job_name:"ow_advertising_json_to_adssnapshot",parent_job_names:"ow_advertising_csvtojson"

  ,expected_start_PST:"3:40",expected_end_PST:"3:59"},
  {job_name:"ow_advertisinghivejoin",parent_job_names:""

  ,expected_start_PST:"3:40",expected_end_PST:"4:37"},
  {job_name:"ow_advertisingsnapshot_displayadsrow_log",parent_job_names:""

  ,expected_start_PST:"1:35",expected_end_PST:"1:36"},
  {job_name:"ow_alert_missing_tactics",parent_job_names:""

  ,expected_start_PST:"6:30",expected_end_PST:"6:30"},
  {job_name:"ow_cache_inventory_physical",parent_job_names:""

  ,expected_start_PST:"1:04",expected_end_PST:"1:06"},
  {job_name:"ow_cache_phone_numbers",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_clickstream_distribution",parent_job_names:""

  ,expected_start_PST:"4:10",expected_end_PST:"4:12"},
  {job_name:"ow_cur_ip_blocks",parent_job_names:""

  ,expected_start_PST:"0:36",expected_end_PST:"0:37"},
  {job_name:"ow_cur_web_clients",parent_job_names:""

  ,expected_start_PST:"0:36",expected_end_PST:"0:37"},
  {job_name:"ow_curate_phone",parent_job_names:""

  ,expected_start_PST:"1:09",expected_end_PST:"1:33"},
  {job_name:"ow_cvs_vin_details",parent_job_names:""

  ,expected_start_PST:"0:00",expected_end_PST:"0:02"},
  {job_name:"ow_dim_ad_billable_types",parent_job_names:""

  ,expected_start_PST:"3:12",expected_end_PST:"3:03"},
  {job_name:"ow_dim_ad_groups",parent_job_names:""

  ,expected_start_PST:"1:12",expected_end_PST:"1:02"},
  {job_name:"ow_dim_ad_tactics",parent_job_names:""

  ,expected_start_PST:"1:59",expected_end_PST:"2:01"},
  {job_name:"ow_dim_ads",parent_job_names:""

  ,expected_start_PST:"0:04",expected_end_PST:"0:05"},
  {job_name:"ow_dim_call_statuses",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:04"},
  {job_name:"ow_dim_campaigns",parent_job_names:""

  ,expected_start_PST:"1:12",expected_end_PST:"1:02"},
  {job_name:"ow_dim_channels",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"ow_dim_corp_hiers",parent_job_names:""

  ,expected_start_PST:"0:31",expected_end_PST:"0:32"},
  {job_name:"ow_dim_creatives_image",parent_job_names:""

  ,expected_start_PST:"3:09",expected_end_PST:"3:12"},
  {job_name:"ow_dim_creatives_image_admission",parent_job_names:""

  ,expected_start_PST:"3:09",expected_end_PST:"3:12"},
  {job_name:"ow_dim_creatives_image_dap",parent_job_names:""

  ,expected_start_PST:"1:01",expected_end_PST:"1:04"},
  {job_name:"ow_dim_creatives_text",parent_job_names:""

  ,expected_start_PST:"3:09",expected_end_PST:"3:14"},
  {job_name:"ow_dim_dates",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_dim_departments",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_dim_device_properties",parent_job_names:""

  ,expected_start_PST:"0:03",expected_end_PST:"0:06"},
  {job_name:"ow_dim_event_types",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_dim_keyword_templates",parent_job_names:""

  ,expected_start_PST:"1:12",expected_end_PST:"1:02"},
  {job_name:"ow_dim_makes",parent_job_names:""

  ,expected_start_PST:"1:04",expected_end_PST:"1:05"},
  {job_name:"ow_dim_models",parent_job_names:""

  ,expected_start_PST:"1:04",expected_end_PST:"1:05"},
  {job_name:"ow_dim_phone_ad_sets",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_dim_phone_channel_sets",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_dim_phone_department_sets",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_dim_phone_numbers",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:04"},
  {job_name:"ow_dim_phone_providers",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_dim_physical_locations",parent_job_names:""

  ,expected_start_PST:"0:03",expected_end_PST:"0:18"},
  {job_name:"ow_dim_placements",parent_job_names:""

  ,expected_start_PST:"3:12",expected_end_PST:"3:03"},
  {job_name:"ow_dim_programs",parent_job_names:""

  ,expected_start_PST:"0:12",expected_end_PST:"0:01"},
  {job_name:"ow_dim_referrers",parent_job_names:""

  ,expected_start_PST:"0:36",expected_end_PST:"0:40"},
  {job_name:"ow_dim_securable_items",parent_job_names:""

  ,expected_start_PST:"0:03",expected_end_PST:"0:05"},
  {job_name:"ow_dim_securable_items_os",parent_job_names:""

  ,expected_start_PST:"0:03",expected_end_PST:"0:04"},
  {job_name:"ow_dim_securable_items2",parent_job_names:""

  ,expected_start_PST:"0:03",expected_end_PST:"0:04"},
  {job_name:"ow_dim_securable_items2_v2",parent_job_names:""

  ,expected_start_PST:"0:03",expected_end_PST:"0:04"},
  {job_name:"ow_dim_styles",parent_job_names:""

  ,expected_start_PST:"1:04",expected_end_PST:"1:05"},
  {job_name:"ow_dim_user_segments",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:03"},
  {job_name:"ow_dim_year_months",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_distribute_clickstream_to_gp_stage_traffic_log",parent_job_names:""

  ,expected_start_PST:"0:20",expected_end_PST:"0:23"},
  {job_name:"ow_distribute_gp_cross_websites_lasttouch",parent_job_names:""

  ,expected_start_PST:"4:30",expected_end_PST:"4:40"},
  {job_name:"ow_distribute_gp_fact_retail_budget_events",parent_job_names:"ow_generate_retail_budget_feed_curation"

  ,expected_start_PST:"0:10",expected_end_PST:"0:21"},
  {job_name:"ow_distribute_gp_fact_sem_ad_groups",parent_job_names:"ow_generate_paidsearch_adgroups_feed_curation"

  ,expected_start_PST:"2:32",expected_end_PST:"3:03"},
  {job_name:"ow_distribute_gp_fact_sem_campaigns",parent_job_names:"ow_cur_dapcampaignmetrics"

  ,expected_start_PST:"3:11",expected_end_PST:"3:23"},
  {job_name:"ow_distribute_gp_sem_creative_fact",parent_job_names:"ow_generate_paidsearch_creatives_feed_curation"

  ,expected_start_PST:"4:51",expected_end_PST:"5:12"},
  {job_name:"ow_distribute_phone_to_gm",parent_job_names:"ow_curate_phone"

  ,expected_start_PST:"1:33",expected_end_PST:"1:35"},
  {job_name:"ow_distribute_phone_to_gp_non_ws_phone_leads",parent_job_names:"ow_curate_phone"

  ,expected_start_PST:"1:33",expected_end_PST:"1:36"},
  {job_name:"ow_distribute_phone_to_gp_ws_phone_leads",parent_job_names:"ow_curate_phone"

  ,expected_start_PST:"1:33",expected_end_PST:"1:39"},
  {job_name:"ow_distribute_phone_to_omniture",parent_job_names:"ow_curate_phone"

  ,expected_start_PST:"1:33",expected_end_PST:"1:37"},
  {job_name:"ow_distribute_retail_to_gp_fact_retail_spend_events",parent_job_names:""

  ,expected_start_PST:"0:30",expected_end_PST:"1:21"},
  {job_name:"ow_fact_cookie_events",parent_job_names:""

  ,expected_start_PST:"3:12",expected_end_PST:"3:04"},
  {job_name:"ow_generate_display_advertisingsnapshot_feed_curation",parent_job_names:""

  ,expected_start_PST:"4:12",expected_end_PST:"4:10"},
  {job_name:"ow_generate_display_advertisingsnapshot_feed_gm_export",parent_job_names:""

  ,expected_start_PST:"4:11",expected_end_PST:"4:17"},
  {job_name:"ow_generate_impression_feed_curation",parent_job_names:"ow_generate_impression_preprocessing_dedupe"

  ,expected_start_PST:"0:41",expected_end_PST:"1:12"},
  {job_name:"ow_generate_impression_feed_gp_export",parent_job_names:""

  ,expected_start_PST:"1:01",expected_end_PST:"1:14"},
  {job_name:"ow_generate_impression_preprocessing_dedupe",parent_job_names:"ow_acq_audit_impression"

  ,expected_start_PST:"0:19",expected_end_PST:"0:21"},
  {job_name:"ow_generate_paidsearch_adgroups_feed_curation",parent_job_names:""

  ,expected_start_PST:"2:23",expected_end_PST:"2:32"},
  {job_name:"ow_generate_paidsearch_campaigns_feed_curation",parent_job_names:""

  ,expected_start_PST:"2:45",expected_end_PST:"3:10"},
  {job_name:"ow_generate_paidsearch_campaigns_feed_gm_export",parent_job_names:""

  ,expected_start_PST:"3:11",expected_end_PST:"3:17"},
  {job_name:"ow_generate_paidsearch_creatives_feed_curation",parent_job_names:""

  ,expected_start_PST:"4:30",expected_end_PST:"4:50"},
  {job_name:"ow_generate_paidsearch_creatives_feed_gm_export",parent_job_names:""

  ,expected_start_PST:"4:51",expected_end_PST:"5:06"},
  {job_name:"ow_generate_paidsearch_keywords_feed_curation",parent_job_names:""

  ,expected_start_PST:"5:30",expected_end_PST:"6:11"},
  {job_name:"ow_generate_paidsearch_keywords_feed_gm_export",parent_job_names:""

  ,expected_start_PST:"6:12",expected_end_PST:"6:21"},
  {job_name:"ow_generate_retail_budget_feed_curation",parent_job_names:"ow_dim_programs,ow_dim_securable_items,ow_dim_securable_items2,ow_dim_dates,ow_dim_ad_tactics",expected_start_PST:"0:12",expected_end_PST:"0:02"},
  {job_name:"ow_generate_retail_spend_feed_curation",parent_job_names:"ow_dim_programs,ow_dim_securable_items,ow_dim_securable_items2,ow_dim_dates,ow_dim_ad_tactics",expected_start_PST:"0:20",expected_end_PST:"0:23"},
  {job_name:"ow_multiple_web_ids",parent_job_names:""

  ,expected_start_PST:"0:02",expected_end_PST:"0:03"},
  {job_name:"ow_partner_program_curation",parent_job_names:""

  ,expected_start_PST:"1:05",expected_end_PST:"1:13"},
  {job_name:"ow_referrers_channels",parent_job_names:""

  ,expected_start_PST:"0:08",expected_end_PST:"0:12"},
  {job_name:"ow_stage_clickstream_v2",parent_job_names:""

  ,expected_start_PST:"2:16",expected_end_PST:"2:38"},
  {job_name:"ow_stage_impression",parent_job_names:"ow_acq_impression,ow_acq_audit_impression"
  ,expected_start_PST:"0:19",expected_end_PST:"0:26"},
  {job_name:"ow_stage_widget_log",parent_job_names:""

  ,expected_start_PST:"1:28",expected_end_PST:"1:30"},
  {job_name:"ow_widget-cache-load",parent_job_names:""

  ,expected_start_PST:"6:55",expected_end_PST:"7:41"},
  {job_name:"ow_xref_program_channel_tactic",parent_job_names:"ow_dim_programs,ow_dim_channels,ow_dim_ad_tactics"

  ,expected_start_PST:"2:01",expected_end_PST:"2:02"},
  {job_name:"ow-cache-vehicles",parent_job_names:"ow-vehicle-supply-curation"

  ,expected_start_PST:"22:05",expected_end_PST:"22:17"},
  {job_name:"ow-connected-store-agg-refresh",parent_job_names:""

  ,expected_start_PST:"2:53",expected_end_PST:"3:12"},
  {job_name:"ow-dimension-partner-refresh-gp",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:02"},
  {job_name:"ow-dimension-prices",parent_job_names:""

  ,expected_start_PST:"22:03",expected_end_PST:"22:05"},
  {job_name:"ow-dimension-vehicle-properties",parent_job_names:"ow-vehicle-supply-curation"

  ,expected_start_PST:"22:17",expected_end_PST:"22:17"},
  {job_name:"ow-partner-page-groups-insert-gp",parent_job_names:""

  ,expected_start_PST:"0:29",expected_end_PST:"0:30"},
  {job_name:"ow-vehicle-supply-curation",parent_job_names:"lot-management-curation"

  ,expected_start_PST:"22:00",expected_end_PST:"22:25"},
  {job_name:"ow_admission_dimension_deduper",parent_job_names:""

  ,expected_start_PST:"2:12",expected_end_PST:"2:01"},
  {job_name:"mds-vehicle-sales-curation",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"mds-vehicle-sales-distribution",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"lot_management_distribution",parent_job_names:""

  ,expected_start_PST:"23:30",expected_end_PST:"23:35"},
  {job_name:"cookieMapFactLoadJob",parent_job_names:""

  ,expected_start_PST:"2:00",expected_end_PST:"2:05"},
  {job_name:"cookieMapForceRolloverJob",parent_job_names:""

  ,expected_start_PST:"23:30",expected_end_PST:"23:30"},
  {job_name:"cookieMapHouseKeepingJob",parent_job_names:""

  ,expected_start_PST:"1:00",expected_end_PST:"1:00"},
  {job_name:"cookieMapMonitorJob",parent_job_names:""

  ,expected_start_PST:"8:20",expected_end_PST:"8:21"},
  {job_name:"cookieMapSendMsgFactLoadJob",parent_job_names:""

  ,expected_start_PST:"2:00",expected_end_PST:"2:00"},
  {job_name:"cookieMapStageLoadJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"sftpJob",parent_job_names:""

  ,expected_start_PST:"5:23",expected_end_PST:"5:33"},
  {job_name:"acxiomSalesFeedJob.acxiom",parent_job_names:""

  ,expected_start_PST:"4:53",expected_end_PST:"4:53"},
  {job_name:"Cache Advertising Websites Phone leads Daily Seeding Job.advertising_websites_phone_leads_daily_v2",parent_job_names:""

  ,expected_start_PST:"4:13",expected_end_PST:"4:14"},
  {job_name:"Cache Advertising Websites Phone leads Monthly Seeding Job.advertising_websites_phone_leads_monthly_v2",parent_job_names:""

  ,expected_start_PST:"6:02",expected_end_PST:"6:02"},
  {job_name:"Cache Benchmark Summary Seeding Job.sessions_benchmark",parent_job_names:""

  ,expected_start_PST:"3:48",expected_end_PST:"3:48"},
  {job_name:"Cache Connected Store Influenced Leads Seeding Job V1.connected_store_influenced_leads_v1",parent_job_names:""

  ,expected_start_PST:"2:49",expected_end_PST:"2:52"},
  {job_name:"Cache Connected Store Seeding Job V1.connected_store_v1",parent_job_names:""

  ,expected_start_PST:"6:27",expected_end_PST:"6:35"},
  {job_name:"Cache Connected Store Seeding Job V2.connected_store_v2",parent_job_names:""

  ,expected_start_PST:"7:00",expected_end_PST:"7:12"},
  {job_name:"Cache Form Leads Seeding Job.form_leads",parent_job_names:""

  ,expected_start_PST:"6:35",expected_end_PST:"6:36"},
  {job_name:"Cache Form Performance Leads Daily Seeding Job.form_performance_leads_daily",parent_job_names:""

  ,expected_start_PST:"2:52",expected_end_PST:"6:27"},
  {job_name:"Cache Form Performance Leads Seeding Job.form_performance_leads",parent_job_names:""

  ,expected_start_PST:"6:36",expected_end_PST:"7:00"},
  {job_name:"Cache Organic Search Phone Calls Seeding Job.organic_search_phone_call_leads",parent_job_names:""

  ,expected_start_PST:"2:49",expected_end_PST:"2:49"},
  {job_name:"Cache Pages Page Label Daily Seeding Job.pages_page_performance_daily",parent_job_names:""

  ,expected_start_PST:"2:49",expected_end_PST:"2:52"},
  {job_name:"Cache Pages Page Label With Site Section Seeding Job.pages_page_label_with_site_section_v2",parent_job_names:""

  ,expected_start_PST:"2:52",expected_end_PST:"2:55"},
  {job_name:"Cache Paidsearch Ad Group Metrics Seeding Job.ad_group_metrics",parent_job_names:""

  ,expected_start_PST:"4:11",expected_end_PST:"4:13"},
  {job_name:"Cache Paidsearch Ad Tactic Seeding Job.paid_search_ad_tactic_v2",parent_job_names:""

  ,expected_start_PST:"4:04",expected_end_PST:"4:05"},
  {job_name:"Cache Paidsearch Advertising Summary Seeding Job.advertising_summary_v2",parent_job_names:""

  ,expected_start_PST:"4:17",expected_end_PST:"4:18"},
  {job_name:"Cache Paidsearch Advertising Summary Daily Seeding Job.advertising_summary_daily_v2",parent_job_names:""

  ,expected_start_PST:"4:21",expected_end_PST:"4:28"},
  {job_name:"Cache Paidsearch Advertising Trends Daily Seeding Job.advertising_trends_daily_v2",parent_job_names:""

  ,expected_start_PST:"4:18",expected_end_PST:"4:21"},
  {job_name:"Cache Paidsearch Agency Seeding Job.paid_search_agency_v2",parent_job_names:""

  ,expected_start_PST:"4:14",expected_end_PST:"4:14"},
  {job_name:"Cache Paidsearch Campaign Keyword Seeding Job.paid_search_campaign_keyword_v2",parent_job_names:""

  ,expected_start_PST:"5:00",expected_end_PST:"5:09"},
  {job_name:"Cache Paidsearch Display Advertising Seeding Job.display_advertising_v2",parent_job_names:""

  ,expected_start_PST:"4:09",expected_end_PST:"4:11"},
  {job_name:"Cache Paidsearch Display Advertising Daily Seeding Job.display_advertising_daily_v2",parent_job_names:""

  ,expected_start_PST:"4:28",expected_end_PST:"4:42"},
  {job_name:"Cache Paidsearch Paid Search Channel Type Seeding Job.paid_search_channel_type_v2",parent_job_names:""

  ,expected_start_PST:"4:28",expected_end_PST:"4:28"},
  {job_name:"Cache Paidsearch Paid Search Summary Seeding Job.paid_search_summary_v2",parent_job_names:""

  ,expected_start_PST:"4:08",expected_end_PST:"4:09"},
  {job_name:"Cache Paidsearch Social Advertising Seeding Job.social_advertising_v2",parent_job_names:""

  ,expected_start_PST:"4:06",expected_end_PST:"4:08"},
  {job_name:"Cache Paidsearch Social Advertising Daily Seeding Job.social_advertising_daily_v2",parent_job_names:""

  ,expected_start_PST:"4:14",expected_end_PST:"4:17"},
  {job_name:"Cache Paidsearch Summary Daily Seeding Job.paidsearch_summary_daily_v2",parent_job_names:""

  ,expected_start_PST:"4:56",expected_end_PST:"5:00"},
  {job_name:"Cache Sessions KPI Daily Seeding Job.sessions_kpi_daily",parent_job_names:""

  ,expected_start_PST:"2:58",expected_end_PST:"3:48"},
  {job_name:"Cache Sessions Overview Daily Seeding Job.sessions_dg_overview_daily",parent_job_names:""

  ,expected_start_PST:"2:55",expected_end_PST:"2:58"},
  {job_name:"Cache Sessions Referrer Seeding Job.sessions_referrer_v2",parent_job_names:""

  ,expected_start_PST:"2:53",expected_end_PST:"2:55"},
  {job_name:"Cache Sessions Summary Seeding Job.sessions_summary_v2",parent_job_names:""

  ,expected_start_PST:"2:55",expected_end_PST:"2:55"},
  {job_name:"Cache Vehicle Events Seeding Job.vehicle_events",parent_job_names:""

  ,expected_start_PST:"2:57",expected_end_PST:"3:00"},
  {job_name:"Cache Vehicle Sales Seeding Job.vehicleSalesDaily",parent_job_names:""

  ,expected_start_PST:"2:28",expected_end_PST:"2:28"},
  {job_name:"Cache Vehicle Vin Seeding Job.vehicle_vin_v2",parent_job_names:""

  ,expected_start_PST:"3:00",expected_end_PST:"3:14"},
  {job_name:"cacheJob.delayed_session_collections",parent_job_names:""

  ,expected_start_PST:"3:20",expected_end_PST:"4:04"},
  {job_name:"cacheJob.delayed_vin_collections",parent_job_names:""

  ,expected_start_PST:"13:00",expected_end_PST:"13:10"},
  {job_name:"cacheJob.leads|pages|search_box|security",parent_job_names:""

  ,expected_start_PST:"2:49",expected_end_PST:"3:20"},
  {job_name:"cacheJob.paid_search",parent_job_names:""

  ,expected_start_PST:"4:53",expected_end_PST:"5:28"},
  {job_name:"cacheJob.sessions",parent_job_names:""

  ,expected_start_PST:"4:04",expected_end_PST:"4:49"},
  {job_name:"cacheJob.survey",parent_job_names:""

  ,expected_start_PST:"5:33",expected_end_PST:"5:35"},
  {job_name:"cacheJob.vehicle_events",parent_job_names:""

  ,expected_start_PST:"4:49",expected_end_PST:"4:53"},
  {job_name:"Facebook Retention Export",parent_job_names:""

  ,expected_start_PST:"13:00",expected_end_PST:"14:00"},
  {job_name:"Paid Search Advertising Export Daily Seeding Job.paid_search_campaign_keyword_daily_v2",parent_job_names:""

  ,expected_start_PST:"4:42",expected_end_PST:"4:56"},
  {job_name:"Portal Dealer Mapping Job.portal_dealer_mapping",parent_job_names:""

  ,expected_start_PST:"3:00",expected_end_PST:"3:00"},
  {job_name:"Portal Distribution Job.portal_distribution",parent_job_names:""

  ,expected_start_PST:"2:57",expected_end_PST:"2:57"},
  {job_name:"Session Agency Daily Seeding Job.session_agency_daily_v2",parent_job_names:""

  ,expected_start_PST:"4:05",expected_end_PST:"4:06"},
  {job_name:"cookieMapFileHandlingStopListenerContainerJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"cookieMapFileHandlingStartListenerContainerJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"cookieMapProcessJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"cookieMapTerminateJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DMS Curation Job",parent_job_names:""

  ,expected_start_PST:"1:00",expected_end_PST:"3:00"},
  {job_name:"Data Edge Batch",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"fetchCurrencyExchangeRateDetail",parent_job_names:""

  ,expected_start_PST:"0:15",expected_end_PST:"0:40"},
  {job_name:"fetchEnterpriseDetail",parent_job_names:""

  ,expected_start_PST:"0:30",expected_end_PST:"0:32"},
  {job_name:"Store Details Job",parent_job_names:"fetchEnterpriseDetail"

  ,expected_start_PST:"0:32",expected_end_PST:"0:34"},
  {job_name:"Cache Vehicle Sales Seeding Job",parent_job_names:"DMS Curation"

  ,expected_start_PST:"3:00",expected_end_PST:"3:03"},
  {job_name:"cacheAttentionScore",parent_job_names:"wf_vehicle_milestones"

  ,expected_start_PST:"3:00",expected_end_PST:"4:00"},
  {job_name:"Vehicle Attention Job",parent_job_names:"cacheAttentionScore"

  ,expected_start_PST:"4:00",expected_end_PST:"4:15"},
  {job_name:"Dealer Review Snippet Seeding Job",parent_job_names:""

  ,expected_start_PST:"1:00",expected_end_PST:"1:15"},
  {job_name:"Vehicle Review Snippet Seeding Job",parent_job_names:"edmunds-api-scraper"

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"Dealer Inventory Count Job",parent_job_names:""

  ,expected_start_PST:"4:30",expected_end_PST:"4:35"},
  {job_name:"Intent Audience Month",parent_job_names:"intent_audience_size"

  ,expected_start_PST:"7:30",expected_end_PST:"7:50"},
  {job_name:"EKW Audience Per Sale KPI Job",parent_job_names:"Audience Batch Runner Status Job,Sales Prediction Cache Import Job"

  ,expected_start_PST:"7:00",expected_end_PST:"7:10"},
  {job_name:"Sales Prediction Cache Import Job",parent_job_names:"vehicle_sale_predictions"

  ,expected_start_PST:"6:45",expected_end_PST:"7:00"},
  {job_name:"EKW Vehicle Sales KPI Job",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"Sales Prediction Job",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"Audience Batch Runner Status Job",parent_job_names:""

  ,expected_start_PST:"4:30",expected_end_PST:"4:31"},
  {job_name:"EKW Inventory KPI Job",parent_job_names:"Dealer Inventory Count Job"

  ,expected_start_PST:"4:35",expected_end_PST:"4:40"},
  {job_name:"Sorted Models Cache Job",parent_job_names:""

  ,expected_start_PST:"7:30",expected_end_PST:"7:40"},
  {job_name:"vehicle_sale_predictions",parent_job_names:""

  ,expected_start_PST:"4:00",expected_end_PST:"6:45"},
  {job_name:"EKW Audience KPI Job",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"Intent Audience Month V2",parent_job_names:"intent_audience_size"

  ,expected_start_PST:"7:30",expected_end_PST:"7:40"},
  {job_name:"EKW DaySupply KPI Job",parent_job_names:"Sales Cache Import Job,Dealer Inventory Count Job"

  ,expected_start_PST:"4:35",expected_end_PST:"4:40"},
  {job_name:"Sales Cache Import Job",parent_job_names:""

  ,expected_start_PST:"4:00",expected_end_PST:"4:05"},
  {job_name:"EKW Audience Prediction KPI Job",parent_job_names:"Audience Batch Runner Status Job"

  ,expected_start_PST:"4:31",expected_end_PST:"4:46"},
  {job_name:"EKW Sale Prediction KPI Job",parent_job_names:"Sales Prediction Cache Import Job"

  ,expected_start_PST:"7:00",expected_end_PST:"7:05"},
  {job_name:"wf_admission_ad_file_loader",parent_job_names:"wf_daily_parameter"

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_admission_parameters",parent_job_names:"wf_daily_parameter"

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_advertising_snapshot",parent_job_names:"wf_dim_ad_networks,wf_dim_creatives_admission,wf_dim_placements,wf_dim_programs"

  ,expected_start_PST:"3:00",expected_end_PST:"4:10"},
  {job_name:"wf_advertising_snapshot_aggregates",parent_job_names:"wf_advertising_snapshot"

  ,expected_start_PST:"3:00",expected_end_PST:"4:20"},
  {job_name:"wf_bi_app_oem_search",parent_job_names:"wf_clickstream_aggregates"

  ,expected_start_PST:"0:01",expected_end_PST:"3:20"},
  {job_name:"wf_c_page_groups",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:35"},
  {job_name:"wf_CLICKSTREAM",parent_job_names:"wf_c_page_groups,wf_dim_presentation_groups,wf_dim_referrers_pages_clients,wf_dim_securable_items,wf_website_lead_parser"

  ,expected_start_PST:"0:01",expected_end_PST:"2:30"},
  {job_name:"wf_clickstream_aggregates",parent_job_names:"wf_clickstream"

  ,expected_start_PST:"0:01",expected_end_PST:"3:10"},
  {job_name:"wf_daily_parameter",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dap_parameters",parent_job_names:"wf_daily_parameter"

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dim_ad_groups",parent_job_names:"wf_dap_parameters"

  ,expected_start_PST:"1:00",expected_end_PST:"1:05"},
  {job_name:"wf_dim_ad_networks",parent_job_names:"wf_admission_parameters"

  ,expected_start_PST:"3:00",expected_end_PST:"3:05"},
  {job_name:"wf_dim_ad_tactics",parent_job_names:""

  ,expected_start_PST:"1:59",expected_end_PST:"2:01"},
  {job_name:"wf_dim_campaigns",parent_job_names:"wf_dap_parameters"

  ,expected_start_PST:"1:00",expected_end_PST:"1:05"},
  {job_name:"wf_dim_channels",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dim_corp_hiers",parent_job_names:""

  ,expected_start_PST:"0:30",expected_end_PST:"0:32"},
  {job_name:"wf_dim_creatives",parent_job_names:"wf_dap_parameters"

  ,expected_start_PST:"1:00",expected_end_PST:"1:05"},
  {job_name:"wf_dim_creatives_admission",parent_job_names:"wf_admission_parameters,wf_dim_promo_ads_participants"

  ,expected_start_PST:"3:00",expected_end_PST:"3:15"},
  {job_name:"wf_dim_dates",parent_job_names:"wf_daily_parameter"

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dim_dealer_groups",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dim_device_properties",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:20"},
  {job_name:"wf_dim_employees",parent_job_names:""

  ,expected_start_PST:"0:05",expected_end_PST:"0:10"},
  {job_name:"wf_dim_inventory_delete",parent_job_names:"wf_vehicle_milestones"

  ,expected_start_PST:"1:00",expected_end_PST:"4:00"},
  {job_name:"wf_dim_keyword_templates",parent_job_names:"wf_dap_parameters"

  ,expected_start_PST:"1:00",expected_end_PST:"1:05"},
  {job_name:"wf_dim_phones",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dim_placements",parent_job_names:"wf_admission_parameters,wf_dim_channels"

  ,expected_start_PST:"3:00",expected_end_PST:"3:05"},
  {job_name:"wf_dim_presentation_groups",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dim_products",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dim_programs",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dim_promo_ads_participants",parent_job_names:"wf_admission_ad_file_loader"

  ,expected_start_PST:"0:01",expected_end_PST:"0:15"},
  {job_name:"wf_dim_referrers_pages_clients",parent_job_names:"wf_geolocations,wf_traffic_parser"

  ,expected_start_PST:"0:01",expected_end_PST:"1:15"},
  {job_name:"wf_dim_securable_items",parent_job_names:"wf_dim_dealer_groups"

  ,expected_start_PST:"0:01",expected_end_PST:"0:05"},
  {job_name:"wf_dim_user_segments",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"1:45"},
  {job_name:"wf_dim_widget_clients",parent_job_names:"wf_widget_parser"

  ,expected_start_PST:"0:01",expected_end_PST:"1:45"},
  {job_name:"wf_dim_widget_ip_blocks",parent_job_names:"wf_geolocations,wf_widget_parser"

  ,expected_start_PST:"0:01",expected_end_PST:"1:45"},
  {job_name:"wf_dim_widget_pages",parent_job_names:"wf_widget_parser"

  ,expected_start_PST:"0:01",expected_end_PST:"1:45"},
  {job_name:"wf_dim_widget_types",parent_job_names:"wf_widget_parser"

  ,expected_start_PST:"0:01",expected_end_PST:"1:45"},
  {job_name:"wf_dim_widget_user_segment_collections",parent_job_names:"wf_widget_parser"

  ,expected_start_PST:"0:01",expected_end_PST:"1:45"},
  {job_name:"wf_edw_dimensions",parent_job_names:"wf_dim_inventory_delete"

  ,expected_start_PST:"0:01",expected_end_PST:"1:30"},
  {job_name:"wf_event_performance",parent_job_names:"wf_clickstream_aggregates"

  ,expected_start_PST:"0:01",expected_end_PST:"3:10"},
  {job_name:"wf_geolocations",parent_job_names:""

  ,expected_start_PST:"4:30",expected_end_PST:"4:35"},
  {job_name:"wf_impression_events",parent_job_names:"wf_dim_referrers_pages_clients"

  ,expected_start_PST:"4:00",expected_end_PST:"4:30"},
  {job_name:"wf_ma1_email_marketing",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"wf_product_subscription",parent_job_names:"wf_dim_employees,wf_dim_products"

  ,expected_start_PST:"3:00",expected_end_PST:"3:05"},
  {job_name:"wf_repman_audit",parent_job_names:"wf_sales_milestones"

  ,expected_start_PST:"3:00",expected_end_PST:"4:45"},
  {job_name:"wf_repman_preprocessor",parent_job_names:"wf_xref_dealer_code_to_web_id"

  ,expected_start_PST:"3:00",expected_end_PST:"3:05"},
  {job_name:"wf_repman_shop_id_web_id",parent_job_names:"wf_dim_securable_items"

  ,expected_start_PST:"3:00",expected_end_PST:"3:05"},
  {job_name:"wf_reputation_management_parameters",parent_job_names:"wf_daily_parameter,wf_dim_employees,wf_edw_dimensions,wf_repman_shop_id_web_id,wf_repman_tables_gp_to_oracle"

  ,expected_start_PST:"3:00",expected_end_PST:"3:05"},
  {job_name:"wf_sale_service_milestone_aggregates",parent_job_names:"wf_sales_milestones,wf_service_milestones"

  ,expected_start_PST:"3:00",expected_end_PST:"5:40"},
  {job_name:"wf_sales_and_service_events",parent_job_names:"wf_repman_preprocessor,wf_reputation_management_parameters"

  ,expected_start_PST:"3:00",expected_end_PST:"3:20"},
  {job_name:"wf_sales_milestones",parent_job_names:"wf_sales_and_service_events,wf_survey_response_events,wf_survey_sent_events"

  ,expected_start_PST:"3:00",expected_end_PST:"5:10"},
  {job_name:"wf_search_clickstream",parent_job_names:"wf_clickstream_aggregates,wf_dim_ad_groups,wf_dim_campaigns,wf_dim_creatives,wf_dim_keyword_templates"

  ,expected_start_PST:"0:01",expected_end_PST:"3:30"},
  {job_name:"wf_search_clickstream_aggregates",parent_job_names:"wf_search_clickstream,wf_vehicle_events"

  ,expected_start_PST:"0:01",expected_end_PST:"3:40"},
  {job_name:"wf_sem_keyword_aggregates",parent_job_names:"wf_advertising_snapshot_aggregates,wf_clickstream_aggregates,wf_sem_campaign_aggregates,wf_sem_keyword_fact"

  ,expected_start_PST:"0:01",expected_end_PST:"3:40"},
  {job_name:"wf_sem_keyword_fact",parent_job_names:"wf_dim_ad_groups,wf_dim_campaigns,wf_dim_keyword_templates"

  ,expected_start_PST:"0:01",expected_end_PST:"3:35"},
  {job_name:"wf_service_milestones",parent_job_names:"wf_sales_milestones"

  ,expected_start_PST:"3:00",expected_end_PST:"5:30"},
  {job_name:"wf_site_status",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"wf_survey_3rd_party_reviews",parent_job_names:"wf_reputation_management_parameters,wf_traffic_parser"

  ,expected_start_PST:"3:00",expected_end_PST:"3:05"},
  {job_name:"wf_survey_response_events",parent_job_names:"wf_repman_preprocessor,wf_reputation_management_parameters"

  ,expected_start_PST:"3:00",expected_end_PST:"3:15"},
  {job_name:"wf_survey_response_events_aggregates",parent_job_names:"wf_survey_response_events"

  ,expected_start_PST:"3:00",expected_end_PST:"3:15"},
  {job_name:"wf_survey_sent_events",parent_job_names:"wf_repman_preprocessor,wf_reputation_management_parameters"

  ,expected_start_PST:"3:00",expected_end_PST:"3:15"},
  {job_name:"wf_survey_sent_events_aggregates",parent_job_names:"wf_survey_sent_events"

  ,expected_start_PST:"3:00",expected_end_PST:"3:15"},
  {job_name:"wf_traffic_parser",parent_job_names:"wf_daily_parameter,wf_dim_user_segments,wf_xref_dim_referrers_channels"

  ,expected_start_PST:"0:01",expected_end_PST:"1:30"},
  {job_name:"wf_vehicle_event_aggregates",parent_job_names:"wf_vehicle_events"

  ,expected_start_PST:"0:01",expected_end_PST:"3:40"},
  {job_name:"wf_vehicle_events",parent_job_names:"wf_clickstream_aggregates"

  ,expected_start_PST:"0:01",expected_end_PST:"3:35"},
  {job_name:"wf_vehicle_milestones",parent_job_names:"wf_vehicle_snapshots"

  ,expected_start_PST:"0:01",expected_end_PST:"3:35"},
  {job_name:"wf_vehicle_snapshot_aggregates",parent_job_names:"wf_vehicle_snapshots"

  ,expected_start_PST:"0:01",expected_end_PST:"3:35"},
  {job_name:"wf_vehicle_snapshots",parent_job_names:"wf_vehicle_events"

  ,expected_start_PST:"0:01",expected_end_PST:"3:35"},
  {job_name:"wf_visitor_intent_events",parent_job_names:"wf_clickstream"

  ,expected_start_PST:"0:01",expected_end_PST:"3:35"},
  {job_name:"wf_visitors",parent_job_names:"wf_clickstream_aggregates"

  ,expected_start_PST:"0:01",expected_end_PST:"3:05"},
  {job_name:"wf_website_lead_parser",parent_job_names:"wf_daily_parameter,wf_dim_securable_items,wf_edw_dimensions"

  ,expected_start_PST:"0:01",expected_end_PST:"1:30"},
  {job_name:"wf_widget_parser",parent_job_names:"wf_daily_parameter,wf_dim_user_segments"

  ,expected_start_PST:"0:01",expected_end_PST:"1:50"},
  {job_name:"wf_wspr_aggregates",parent_job_names:"wf_vehicle_snapshot_aggregates"

  ,expected_start_PST:"0:01",expected_end_PST:"5:30"},
  {job_name:"wf_xref_dealer_code_to_web_id",parent_job_names:""

  ,expected_start_PST:"0:01",expected_end_PST:"0:20"},
  {job_name:"wf_xref_dim_referrers_channels",parent_job_names:"wf_dim_channels"
  ,expected_start_PST:"0:01",expected_end_PST:"0:20"},
  {job_name:"wf_metadata_reporter",parent_job_names:""
  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"mds-partsinvoicepayment-distribution",parent_job_names:""

  ,expected_start_PST:"0:00",expected_end_PST:"0:10"},
  {job_name:"mds-parts-distribution",parent_job_names:""

  ,expected_start_PST:"0:00",expected_end_PST:"0:10"},
  {job_name:"service-appointment-curation",parent_job_names:""

  ,expected_start_PST:"0:30",expected_end_PST:"1:00"},
  {job_name:"mds-ro-distribution",parent_job_names:""

  ,expected_start_PST:"0:00",expected_end_PST:"0:10"},
  {job_name:"ow-fixedops-curation-dealersinfo-daily",parent_job_names:""

  ,expected_start_PST:"17:01",expected_end_PST:"17:11"},
  {job_name:"mds-ro-curation",parent_job_names:""

  ,expected_start_PST:"0:10",expected_end_PST:"1:10"},
  {job_name:"service-appointment-distribution",parent_job_names:""

  ,expected_start_PST:"3:05",expected_end_PST:"3:15"},
  {job_name:"fixedops-reconciliation",parent_job_names:""

  ,expected_start_PST:"5:05",expected_end_PST:"5:25"},
  {job_name:"mds-parts-curation",parent_job_names:""

  ,expected_start_PST:"0:00",expected_end_PST:"0:30"},
  {job_name:"mds-partsinvoicepayment-curation",parent_job_names:""

  ,expected_start_PST:"0:00",expected_end_PST:"0:30"},
  {job_name:"ow-fixedops-curation-closedrodetails-daily",parent_job_names:""

  ,expected_start_PST:"5:05",expected_end_PST:"5:45"},
  {job_name:"ow-fixedops-curation-appointmentheader",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapKeywordsFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"cleanFilesJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapCreativesMetricsMultithreadedFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapCampaignMetricsMultithreadedFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"sampleDapRetailBudgetMetricsFilesPusherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapCampaignsFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"hadoopAcquisitionFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapAdGroupsFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapCreativesFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapKeywordMetricsMultithreadedFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapRetailBudgetMetricsFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapRetailSpendMetricsFetcherJob",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"DapMediaTacticsFetcherWorkUnit",parent_job_names:""

  ,expected_start_PST:"",expected_end_PST:""},
  {job_name:"dapAdGroupsMetricsFetcherJob",parent_job_names:""
  ,expected_start_PST:"",expected_end_PST:""}
];

function sortData(){
  var i=0;
  while(taskArray[i]!=undefined){
    if(taskArray[i].parent_job_names==""){
    taskArray[i].parent_job_names=taskArray[i].job_name;
    }else{
    // console.log("length :" + taskArray.length);
    // console.log("parent  of " + i + " : "+taskArray[i].job_name +taskArray[i].parent_job_names);
    var tasktypes1 = taskArray[i].parent_job_names.split(",");
    //console.log(" array of types " +tasktypes1);
    taskArray[i].parent_job_names=tasktypes1[0];
    for(var j=1;j<tasktypes1.length;j++){
    var t={"job_name":taskArray[i].job_name,"parent_job_names":tasktypes1[j],"expected_start_PST":taskArray[i].expected_start_PST,"expected_end_PST":taskArray[i].expected_end_PST};
    taskArray.push(t);
    }}
    i++;
  }
}

function compareS(a,b) {
    if (a< b)
        return -1;
    if (a > b)
        return 1;
    return 0;
}

function compare(a,b) {
    if (a.parent_job_names < b.parent_job_names)
        return -1;
    if (a.parent_job_names > b.parent_job_names)
        return 1;
    return 0;
}

var subArray = taskArray.slice(200, 220);
//
// var subArray = [
//     {job_name: "wf_admission_parameters", parent_job_names: "wf_daily_parameter", expected_start_PST: "0:01", expected_end_PST: "0:05"},
//     {job_name: "wf_daily_parameter", parent_job_names: "wf_daily_parameter", expected_start_PST: "0:01", expected_end_PST: "0:05"},
//     {job_name: "wf_dap_parameters", parent_job_names: "wf_daily_parameter", expected_start_PST: "0:01", expected_end_PST: "0:05"},
//     {job_name: "wf_admission_ad_file_loader", parent_job_names: "wf_daily_parameter", expected_start_PST: "0:01", expected_end_PST: "0:05"}];