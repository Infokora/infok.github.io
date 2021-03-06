<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>MyAdminPg</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
    <!-- Bootstrap 3.3.6 -->
    <link rel="stylesheet" href="<?= Router::$permalink ?>views/main/bootstrap/css/bootstrap.min.css">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">
    <!-- Ionicons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="<?= Router::$permalink ?>views/main/css/AdminLTE.min.css">
    <!-- AdminLTE Skins. We have chosen the skin-blue for this starter
          page. However, you can choose any other skin. Make sure you
          apply the skin class to the body tag so the changes take effect.
    -->
    <link rel="stylesheet" href="<?= Router::$permalink ?>views/main/css/skins/skin-blue.min.css">
    <link rel="stylesheet" href="<?= Router::$permalink ?>views/main/css/fixis_admin_page.css">
    <link rel="stylesheet/less" type="text/less" href="<?= Router::$permalink ?>views/main/css/organization_list.less">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="<?= Router::$permalink ?>views/main/js/less.min.js" type="text/javascript"></script>
</head>
<body class="hold-transition skin-blue sidebar-mini">
<div class="wrapper">
    <!-- Main Header -->


    <header class="main-header">
        <!-- Logo -->
        <a href="index2.html" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <span class="logo-mini"><b>A</b>LT</span>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg"><b>Admin</b>LTE</span>
        </a>

        <!-- Header Navbar -->
        <nav class="navbar navbar-static-top" role="navigation">
            <!-- Sidebar toggle button-->
            <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                <span class="sr-only">Toggle navigation</span>
            </a>
            <!-- Navbar Right Menu -->
            <div class="navbar-custom-menu">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">Меню <span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <?php echo $nav_content; ?>
                        </ul>
                    </li>
                    <!-- User Account Menu -->
                    <li class="dropdown user user-menu">
                        <!-- Menu Toggle Button -->
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <!-- The user image in the navbar-->
                            <img src="dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
                            <!-- hidden-xs hides the username on small devices so only the image appears. -->
                            <span class="hidden-xs">Alexander Pierce</span>
                        </a>
                        <ul class="dropdown-menu">
                            <!-- The user image in the menu -->
                            <li class="user-header">
                                <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                                <p>
                                    Alexander Pierce - Web Developer
                                    <small>Member since Nov. 2012</small>
                                </p>
                            </li>
                            <!-- Menu Body -->
                            <li class="user-body">
                                <div class="row">
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Followers</a>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Sales</a>
                                    </div>
                                    <div class="col-xs-4 text-center">
                                        <a href="#">Friends</a>
                                    </div>
                                </div>
                                <!-- /.row -->
                            </li>
                            <!-- Menu Footer-->
                            <li class="user-footer">
                                <div class="pull-left">
                                    <a href="#" class="btn btn-default btn-flat">Profile</a>
                                </div>
                                <div class="pull-right">
                                    <a href="#" class="btn btn-default btn-flat">Sign out</a>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <!-- Control Sidebar Toggle Button -->
                    <li>
                        <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">

            <!-- Sidebar user panel (optional) -->
            <div class="user-panel">
                <div class="pull-left image">
                    <img src="dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p>Alexander Pierce</p>
                    <!-- Status -->
                </div>
            </div>

            <!-- search form (Optional) -->
            <form action="#" method="get" class="sidebar-form">
                <div class="input-group">
                    <input type="text" name="q" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
                </div>
            </form>
            <!-- /.search form -->

            <!-- Sidebar Menu -->
            <ul class="sidebar-menu">
                <li class="header">Menu</li>
                <!-- Optionally, you can add icons to the links -->
                <li class="active treeview">
                    <a href="#">
                        <span>Организации</span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="<?= Router::$permalink ?>admin/organizations/page/1"> Список<span class="pull-right-container"><i
                                            class="fa fa-link"></i></span></a></li>
                        <li><a href="<?= Router::$permalink ?>admin/organizations/org_add">Добавить<span
                                    class="pull-right-container"><i class="fa fa-plus"></i></span></a>
                        </li>
                    </ul>

                </li>
                <li>
                    <a href="#">
                        <span>Танцевальные групы</span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="<?= Router::$permalink ?>admin/dancing_groups/dance_list">Редактировать<span class="pull-right-container"><i class="fa fa-pencil-square-o"></i></span></a>
                        </li>
                        <li><a href="<?= Router::$permalink ?>admin/dancing_groups/add_dancing_groups">Добавить<span class="pull-right-container"><i class="fa fa-plus"></i></span></a>
                        </li>
                    </ul>
                </li>
            </ul>
            <!-- /.sidebar-menu -->
        </section>
        <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">


        </section>

        <!-- Main content -->
        <section class="content">

            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                 aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title text-uppercase" id="myModalLabel">удаление организации</h4>
                        </div>
                        <div class="modal-body">
                            <p></p>
                        </div>
                        <div class="modal-footer">
                            <form method="post" action="delOrg">
                                <input type="submit" name="delete_org"
                                       class="btn btn-primary text-capitalize deletion-submit" value="удалить!">
                                <input type="hidden" name="delete_org_id">
                                <input type="hidden" name="redirect" value="<?php echo Router::$uri; ?>">
                                <button type="button" class="btn btn-secondary text-capitalize deletion-cancel"
                                        data-dismiss="modal">отмена
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row">
                    <?php if (isset($this->message)) {
                        echo $this->message;
                    }
                    ?>

                    <?php for ($i = $start; $i < $end; $i++): ?>
                        <?php $organization = $organizationsList[$i]; ?>
                        <div class="col-xs-12 col-md-6 pull-left">

                            <div data-id="<?php echo $organization['id']; ?>"
                                 class="container box flat box-solid box-primary organization-list">
                                <div class="row box-header">
                                    <h3 class="box-title text-uppercase">
                                        <?php echo $organization['org_name']; ?>
                                    </h3>
                                    <button type="button" class="btn btn-primary pull-right org-del-btn"
                                            data-toggle="modal"
                                            data-target="#myModal"><i class="fa fa-times"></i></button>
                                </div>
                                <div class="row box-body">
                                    <div class="col-md-4 col-xs-12">
                                        <img class="org-img"
                                             src="<?php echo Router::$permalink . $organization['org_pic_path'] ?>">
                                    </div>
                                    <div class="col-md-8 col-xs-12 pull-left">
                                        <div class="org-info-wrapper">
                                            <dl>
                                                <dt class="organization-title-president-name">Президент организации:
                                                </dt>
                                                <dd class="organization-info-president-name"><?php echo $organization['org_head_fio']; ?></dd>
                                                <dt class="organization-title-president-phone">Мобильный номер:</dt>
                                                <dd class="organization-info-president-phone"><a
                                                        href="tel:+380685557777"><?php echo $organization['org_phone']; ?></a>
                                                </dd>
                                                <dt class="organization-title-president-email">Электронный адрес:</dt>
                                                <dd class="organization-info-president-email"><a
                                                        href="mailto:example@gmail.com"
                                                        target="_blank"><?php echo $organization['org_email']; ?></a>
                                                </dd>
                                            </dl>
                                            <div class="btn-group-xs specialX">
                                                <button type="button" class="btn btn-info btn-flat"><i
                                                        class="fa fa-info"></i></button>
                                                <button type="button" class="btn btn-success btn-flat"><i
                                                        class="fa fa-edit"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-12">
                                        <?php $_SESSION['org_id'] = $organization['id']?>
                                        <form method="post" action="../org_settings/<?php echo $organization['id']; ?>">
                                            <input name="submitik" type="submit" class="form-control text-center gogogo" value="Настройка организации"><a></a></input>
                                        </form>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-xs-12 full-info-container">

                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endfor; ?>

                </div>
            </div>
        </section>
        <!-- /.content -->
        <div class="row text-center">
            <?php echo $pagination; ?>
        </div>
    </div>
    <!-- /.content-wrapper -->


    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
        <!-- Create the tabs -->
        <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
            <li class="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
            <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
        </ul>
        <!-- Tab panes -->
        <div class="tab-content">
            <!-- Home tab content -->
            <div class="tab-pane active" id="control-sidebar-home-tab">
                <h3 class="control-sidebar-heading">Recent Activity</h3>
                <ul class="control-sidebar-menu">
                    <li>
                        <a href="javascript:;">
                            <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                            <div class="menu-info">
                                <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                                <p>Will be 23 on April 24th</p>
                            </div>
                        </a>
                    </li>
                </ul>
                <!-- /.control-sidebar-menu -->

                <h3 class="control-sidebar-heading">Tasks Progress</h3>
                <ul class="control-sidebar-menu">
                    <li>
                        <a href="javascript:;">
                            <h4 class="control-sidebar-subheading">
                                Custom Template Design
                                <span class="pull-right-container">
                  <span class="label label-danger pull-right">70%</span>
                </span>
                            </h4>

                            <div class="progress progress-xxs">
                                <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                            </div>
                        </a>
                    </li>
                </ul>
                <!-- /.control-sidebar-menu -->

            </div>
            <!-- /.tab-pane -->
            <!-- Stats tab content -->
            <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
            <!-- /.tab-pane -->
            <!-- Settings tab content -->
            <div class="tab-pane" id="control-sidebar-settings-tab">
                <form method="post">
                    <h3 class="control-sidebar-heading">General Settings</h3>

                    <div class="form-group">
                        <label class="control-sidebar-subheading">
                            Report panel usage
                            <input type="checkbox" class="pull-right" checked>
                        </label>

                        <p>
                            Some information about this general settings option
                        </p>
                    </div>
                    <!-- /.form-group -->
                </form>
            </div>
            <!-- /.tab-pane -->
        </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
</div>
<!-- ./wrapper -->

<!-- REQUIRED JS SCRIPTS -->

<!-- jQuery 2.2.3 -->
<script src="<?= Router::$permalink ?>views/main/plugins/jQuery/jquery-2.2.3.min.js"></script>
<!-- Bootstrap 3.3.6 -->
<script src="<?= Router::$permalink ?>views/main/bootstrap/js/bootstrap.min.js"></script>
<!-- AdminLTE App -->
<script src="<?= Router::$permalink ?>views/main/js/app.min.js"></script>
<script src="<?= Router::$permalink ?>views/main/js/organization_list.js?112"></script>

<!-- Optionally, you can add Slimscroll and FastClick plugins.
     Both of these plugins are recommended to enhance the
     user experience. Slimscroll is required when using the
     fixed layout. -->
</body>
</html>