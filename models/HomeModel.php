<?php

class HomeModel
{
    public static function getNavHomeContent($page)
    {
        $navigation = new Navigation();
        $nav_content = $navigation->createNavContent($page, '');
        return $nav_content;
    }
}