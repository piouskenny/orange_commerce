<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitaf9c2d4d884037d0724e445a8357c1e0
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Predis\\' => 7,
        ),
        'A' => 
        array (
            'App\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Predis\\' => 
        array (
            0 => __DIR__ . '/..' . '/predis/predis/src',
        ),
        'App\\' => 
        array (
            0 => __DIR__ . '/../..' . '/app',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitaf9c2d4d884037d0724e445a8357c1e0::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitaf9c2d4d884037d0724e445a8357c1e0::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitaf9c2d4d884037d0724e445a8357c1e0::$classMap;

        }, null, ClassLoader::class);
    }
}
