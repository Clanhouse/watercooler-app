<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ExampleController extends AbstractController
{
    /**
     * @Route("/", name="example")
     */
    public function index(): Response
    {
        return $this->json([
            'message' => 'Hello world!',
            'path' => 'src/Controller/ExampleController.php',
        ]);
    }
}
