<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * A contact.
 *
 * @ORM\Entity
 *
 * @ApiResource
 */
class Contact
{
    /**
     * @var int The id of this contact.
     *
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string The name of this contact.
     *
     * @ORM\Column
     */
    private $name;

    /**
     * @var string The email of this contact.
     *
     * @ORM\Column
     */
    private $email;

    /**
     * @var int The question of this contact.
     *
     * @ORM\Column(type="text")
     */
    private $question;

    /**
     * @var string The status of this contact.
     *
     * @ORM\Column
     */
    private $status;
}