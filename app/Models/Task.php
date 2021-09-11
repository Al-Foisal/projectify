<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model {
    use HasFactory;

    protected $guarded = [];

    public function project() {
        return $this->belongsTo(Project::class);
    }

    public function getPriorityAttribute() {
        return ($this->due_date > 0) ? 'High' : 'Low';
    }
}
